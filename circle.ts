interface FigurasGeo {
  area(): number
  // eslint-disable-next-line semi
}

export default class Circle implements FigurasGeo {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    const myarea = Math.PI * this.radius ** 2;
    return myarea;
  }
}