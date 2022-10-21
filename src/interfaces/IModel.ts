interface IModel<T> {
  findAll(): Promise<T[]>
  findOne(_id: string): Promise<T | null>
}

export default IModel;