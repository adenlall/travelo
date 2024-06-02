import { PrismaClient } from '@prisma/client';
const dd = [
    {
        id:'9sc4fiid3232',
        name:'aden lall',
        username:'adenlall',
        email:'aden@proton.me',
        location:'Casablanca, Morocco',
    },
    {
        id:'e1f43iidb32',
        name:'janah bilal',
        username:'jn22',
        email:'jn22@gmail.me',
        location:'Tokyo, Japan',
    },
];
const prisma = new PrismaClient();

export async function run() {
  await prisma.user.createMany({
    data: dd
  })
}
