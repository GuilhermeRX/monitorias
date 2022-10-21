import IUser from "../interfaces/IUser";
import UserService from "../services/UserService";
import AbstractController from "./AbstractController";

export default class UserController extends AbstractController<IUser> {
  constructor(protected _service: UserService) {
    super(_service)
  }
}