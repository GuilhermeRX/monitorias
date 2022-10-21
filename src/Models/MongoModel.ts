import { isValidObjectId, Model } from 'mongoose';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  constructor(protected _model: Model<T>) { }

  public async findAll(): Promise<T[]> {
    return this._model.find();
  }

  public async findOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('ValidationError');
    return this._model.findOne({ _id });
  }
}

export default MongoModel;