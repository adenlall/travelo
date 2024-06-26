import { PrismaClient } from '@prisma/client';
const dd = [
  {
    id: '9stttiid3232',
    name: 'aden lall',
    username: 'lalladen',
    email: 'xcom@proton.me',
    location: 'Casablanca, Morocco',
  },
  {
    id: 'e1f43m3iidb32',
    name: 'janah bilal',
    username: 'jnxx22',
    email: 'tokyo@gmail.me',
    location: 'Tokyo, Japan',
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
  await prisma.user.createMany({
    data: dd
  })
}
