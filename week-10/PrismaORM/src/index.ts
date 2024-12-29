import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function inserUser(firstName: string, lastName: string, email: string, password: string) {
  const user = await prisma.user.create({
    data:{
        firstName,
        lastName,
        email,
        password
    },
    select: {
        id: true,
        password: true
    }
  })
  console.log('res', user)
}

inserUser('pratap', 'das', 'pratap@gmail.com', 'Password')