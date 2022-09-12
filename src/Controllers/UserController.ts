import { Request, Response } from "express";
import UserService from "../Services/UserService";

interface IUserController {
  findAll(req: Request, res: Response): Promise<Response>
  findById(req: Request, res: Response): Promise<Response>
};

export default class UserController implements IUserController {
  // private service: UserService
  // constructor(service: UserService) {
  //   this.service = service
  // }
  constructor(private service: UserService) { }

  async findAll(req: Request, res: Response): Promise<Response> {
    const users = await this.service.findAll()
    return res.status(200).json(users)
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id)
    const user = await this.service.findById(id)
    return res.status(200).json(user)
  }

  public test = async (req: Request, res: Response) => {
    const users = await this.service.findAll()
    return res.status(200).json(users)
  }
}