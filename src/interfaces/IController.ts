import { Request, Response } from "express"

export default interface IController<T> {
  findAll(req: Request, res: Response): Promise<Response<T[]>>
  findOne(req: Request, res: Response): Promise<Response<T>>
}