'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Silvio Santos',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Jon Snow',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Daenerys',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Arya Stark',
        email: 'anyemail',
        password: 'anypassword',
        full_name: 'anyfullname',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
