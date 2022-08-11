const { expect } = require('chai');
const sinon = require('sinon');
const userModel = require('../../models/userModel');
const userService = require('../../services/userService');

const userArray = [
  { email: 'test@test.com', name: 'UserTest', password: '123456' },
  { email: 'test2@test.com', name: 'Usertest2', password: '123456' }
]

describe('UserService', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('addUser', () => {
    it('Verifica se retorna o id esperado', async () => {
      sinon.stub(userModel, 'addUser').resolves(3);

      const id = await userService.addUser();
      expect(id).to.be.equals(3);
    });

  });


  describe('getUsers', () => {
    it('Verifica se retorna um array com todos os usuários', async () => {
      sinon.stub(userModel, 'getUsers').resolves(userArray);

      const users = await userService.getUsers();
      expect(users).to.be.equals(userArray);
    });
  });

})