/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dogs', [
      { name: 'Neo', color: 'red&amber', tail_length: 22, weight: 32 },
      { name: 'Jessy', color: 'black&white', tail_length: 7, weight: 14 }
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
