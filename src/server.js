const express = require('express');
const app = require("./app");
const seedAdmin = require('../prisma/seed');


const PORT = 3000;

seedAdmin()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port 3000`);
    });
  })
  .catch(err => {
    console.error('Seed failed', err);
  });
