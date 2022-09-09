"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Calculadora {
    constructor(n1, n2) {
        this.numeros = n1 + n2;
        this.numerosdeCalculadoras = '8';
    }
    soma(n1, n2) {
        return n1 + n2;
    }
    anymethod(n1, n2) {
        return n1 + n2;
    }
    ;
}
const calculadora = new Calculadora(10, 2);
console.log(calculadora.numeros);
console.log(calculadora.soma(2, 2));
