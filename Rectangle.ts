/* eslint-disable import/no-unresolved */
interface FigurasGeo {
  area(): number
  // eslint-disable-next-line semi
}

export default class Rectangle implements FigurasGeo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  area(): number {
    const myarea = this.base * this.altura;
    return myarea;
  }
}