const { expect } = require('chai');
const sinon = require('sinon');
const userController = require('../../controllers/userController');
const userService = require('../../services/userService');

const body = {
  email: 'test@test.com',
  name: 'UserTest',
  password: "123456"
}

const userArray = [
  { email: 'test@test.com', name: 'UserTest', password: '123456' },
  { email: 'test2@test.com', name: 'Usertest2', password: '123456' }
]

describe('UserController', () => {
  beforeEach(() => {
    sinon.restore();
  })

  describe('addUser', () => {
    it('Verifica se retorna status 201 e as informações da pessoa inserida', async () => {
      sinon.stub(userService, 'validateBody').returns(body);
      sinon.stub(userService, 'addUser').resolves(2);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await userController.addUser(req, res);
      expect(res.status.calledWith(201)).to.be.equals(true);
      expect(res.json.calledWith({ ...body, id: 2 })).to.be.equals(true);
    })


  });

  describe('getUsers', () => {
    it('Verifica se retorna status 200 e todos os usuários', async () => {
      sinon.stub(userService, 'getUsers').resolves(userArray);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await userController.getUsers(req, res);
      expect(res.status.calledWith(200)).to.be.equals(true);
      expect(res.json.calledWith(userArray)).to.be.equals(true);
    })
  });
});