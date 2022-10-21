import { Request, Response } from "express";
import IController from "../interfaces/IController";
import IService from "../interfaces/IService";

export default abstract class AbstractController<T> implements IController<T> {
  constructor(protected _service: IService<T>) { }

  public async findAll(req: Request, res: Response): Promise<Response<T[]>> {
    const results = await this._service.findAll()
    return res.status(200).json(results);
  }

  public async findOne(req: Request, res: Response): Promise<Response<T>> {
    const results = await this._service.findOne(req.params.id)
    return res.status(200).json(results);
  }
}