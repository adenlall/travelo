import { PrismaClient, User } from "@prisma/client";
import { fa, faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
    console.log("ujjjjjjjjjjjj");

    await prisma.tripDetails.deleteMany({});
    await prisma.trip.deleteMany({});
    await prisma.location.deleteMany({});
    await prisma.userDetails.deleteMany({});
    await prisma.userHistory.deleteMany({});
    await prisma.user.deleteMany({});

    const amountOfUsers = 15;

    const users: User[] = [];

    const name = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }

    const addUsers = async () => {

        const uuid = faker.string.uuid();
        console.log("\n");
        console.log("uuid : " + uuid);
        console.log("\n");

        await prisma.user.create({
            data: {
                id: uuid,
                name: name.firstName + " " + name.lastName,
                location: faker.location.city() + ", " + faker.location.country(),
                role: "GUID",
                username: faker.internet.userName(name) + faker.number.int({ max: 10000, min: 0 }),
                email: faker.internet.email(name) + faker.number.int({ max: 10000, min: 0 }),
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
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
                details: {
                    create: {
                        id: faker.string.uuid(),
                        data: {},
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