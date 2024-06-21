import { PrismaClient, User } from "@prisma/client";
import { fa, faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
    console.log("\n");
    console.log("USER SEED");

    await prisma.trip.deleteMany({});
    await prisma.location.deleteMany({});
    await prisma.profile.deleteMany({});
    await prisma.userHistory.deleteMany({});
    await prisma.user.deleteMany({});

    const amountOfUsers = 15;

    const users: User[] = [];


    const addUsers = async () => {

        const name = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName()
        }

        const uuid = faker.string.uuid();

        await prisma.user.create({
            data: {
                id: uuid,
                name: name.firstName + " " + name.lastName,
                role: "GUID",
                username: faker.internet.userName(name) + faker.number.int({ max: 10000, min: 0 }),
                email: faker.internet.email(name) + faker.number.int({ max: 10000, min: 0 }),
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
                profile: {
                    create: {
                        id: faker.string.uuid(),
                        details: { name: name },
                        bio: faker.person.bio(),
                        links: {
                            website: faker.internet.url(),
                            twitter: "@" + faker.internet.userName(name),
                            others: [
                                { name: "blog", url: faker.internet.url(), },
                                { name: "second", url: faker.internet.url(), },
                            ]
                        },
                        city: faker.location.city(),
                        country: faker.location.country(),
                        media: {
                            video: faker.internet.url(),
                            others: [
                                faker.internet.url(),
                                faker.internet.url(),
                                faker.internet.url()
                            ]
                        }
                    }
                }
            }
        })
        await prisma.trip.create({
            data: {
                id: faker.string.uuid(),
                users: {
                    connect: {
                        id: uuid,
                    }
                },
                location: {
                    create: {
                        id: faker.string.uuid(),
                        title: "Location of " + faker.location.city() + ".",
                        country: faker.location.country(),
                        lat: "" + faker.location.latitude(),
                        long: "" + faker.location.longitude(),
                        description: "Description of Location of " + faker.location.city() + ".",
                        createdAt: faker.date.past(),
                        updatedAt: faker.date.recent(),
                        author: {
                            connect: {
                                id: uuid,
                            }
                        }
                    }
                },
                price: faker.number.int({ max: 10000, min: 200 }),
                priceUnit: "$",
                title: "Trip to " + faker.location.city() + ", Amazing!",
                description: faker.lorem.lines(3),
                duration: faker.number.int({ max: 500, min: 1 }),
                durationUnit: "Day",
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
            }
        })
    }

    for (let i = 0; i < amountOfUsers; i++) {
        await addUsers();
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });