'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',
      [
        {
          name: 'John Doe',
          email: 'anyemail@gmail.com'
        },
        {
          name: 'Jon Snow',
          email: 'anyemail@gmail.com'
        },
        {
          name: 'Arya Stark',
          email: 'anyemail@gmail.com'
        },
        {
          name: 'Daenerys Targaryen',
          email: 'anyemail@gmail.com'
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
