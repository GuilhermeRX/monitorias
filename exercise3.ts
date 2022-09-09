import dotenv from 'dotenv';
dotenv.config();

interface ICalculadora {
  numerosdeCalculadoras: string
  soma: (n1: number, n2: number) => number
  anymethod: (n1: number, n2: number) => number
  multiplicao: (n1: number, n2: number) => number
}

class Calculadora implements ICalculadora {
  numeros: number
  numerosdeCalculadoras: string

  constructor(n1: number, n2: number) {
    this.numeros = n1 + n2
    this.numerosdeCalculadoras = '8'
  }

  soma(n1: number, n2: number): number {
    return n1 + n2;
  }

  anymethod(n1: number, n2: number): number {
    return n1 + n2
  };
}

const calculadora = new Calculadora(10, 2);
console.log(calculadora.numeros)
console.log(calculadora.soma(2, 2))