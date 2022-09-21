import Circle from './circle';
import Rectangle from './Rectangle';

type Formas = Circle | Rectangle
type Formastry = string
const valores: Formastry = [Circle];

console.log(valores);

export default class TotalArea {
  shapes: Formas[];
  constructor(shapes: Formas[]) {
    this.shapes = shapes;
  }

  calculate(): number {
    const subTotal: number[] = [];

    this.shapes.forEach((shape) => {
      const total = shape.area();
      subTotal.push(total);
    });

    return subTotal.reduce((acc, area) => acc + area);
  }
}