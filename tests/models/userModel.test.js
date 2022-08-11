const { expect } = require('chai');
const sinon = require('sinon');
const db = require('../../models/connection');
const userModel = require('../../models/userModel');

const userInfo = {
  email: 'test@test.com',
  name: 'UserTest',
  password: "123456"
}

const userArray = [
  { email: 'test@test.com', name: 'UserTest', password: '123456' },
  { email: 'test2@test.com', name: 'Usertest2', password: '123456' }
]

describe('UserModel', () => {
  beforeEach(() => {
    sinon.restore();
  })

  describe('addUser', () => {
    it('Verifica se retorna o id do usuário inserido', async () => {
      sinon.stub(db, 'query').resolves([{ insertId: 5 }]);
      const id = await userModel.addUser(userInfo);
      expect(id).to.be.equals(5);
    });
  })

  describe('getUsers', () => {
    it('Verifica se retorna corretamente todos os usuários', async () => {
      sinon.stub(db, 'query').resolves([userArray]);
      const users = await userModel.getUsers();
      expect(users).to.be.equals(userArray)
    });
  })


});