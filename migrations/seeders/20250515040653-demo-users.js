'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'madhan kumar',
        email: 'kumar@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'avinash',
        email: 'avinash@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
