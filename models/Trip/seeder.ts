import { PrismaClient } from '@prisma/client';
const dd = [
  {
    id: '9stttiid3232'
  },
  {
    id: 'e1f43m3iidb32',
  },
];
const prisma = new PrismaClient();

export function run() {
  seed()
    .catch(e => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}

async function seed() {
//   await prisma.trip.create({
//     data:{
//         // users: "ss"
//     }
//   })
}
