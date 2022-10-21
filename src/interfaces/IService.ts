export default interface IService<T> {
  findAll(): Promise<T[]>
  findOne(_id: string): Promise<T>
}