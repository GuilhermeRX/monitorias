import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  constructor(private service: UserService) { }

  async findAll(req: Request, res: Response) {
    const users = await this.service.findAll();
    res.status(200).json(users);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const user = await this.service.findById(id)
    res.status(200).json(user)
  }
}