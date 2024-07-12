import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

const fresh = async () => {
  await prisma.tripsOnUsers.deleteMany({});
  await prisma.trip.deleteMany({});
  await prisma.location.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});
}

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    trips: {
      create: [
        {
          assignedAt: new Date(),
          trip: {
            create: {
              title: "Alice Trips to Ifrane Rivers",
              location: {
                create: {
                  city: "Ifrane",
                  country: "Morocco",
                  state: "Safi",
                }
              }
            }
          }
        },
        {
          assignedAt: new Date(),
          trip: {
            create: {
              title: "Trips to Safi City",
              location: {
                create: {
                  city: "Safi",
                  country: "Morocco",
                  state: "Safi",
                }
              }
            }
          }
        },
        {
          assignedAt: new Date(),
          trip: {
            create: {
              title: "My Agadir City Trip",
              location: {
                create: {
                  city: "Agadir",
                  country: "Morocco",
                  state: "Sous-Massa",
                }
              }
            }
          }
        }
      ]
    }
  }
]

export async function main() {
  try {
    console.log("\n");
    console.log(`Cleaning Up ...`);
    console.log("\n");

    await fresh();

    console.log("\n");
    console.log(`Start seeding ...`);
    console.log("\n");
    var i = 0;
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }
    console.log("\n");
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
