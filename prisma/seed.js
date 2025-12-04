// src/seed.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('12345Asdasd', 10);

  await prisma.user.upsert({
    where: { email: 'admin@mail.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@mail.com',
      password,
      role: 'ADMIN',
    },
  });

  console.log('Admin Created');
}

module.exports = main;
