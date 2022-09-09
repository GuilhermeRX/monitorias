"use strict";
class Pessoa {
    constructor(nariz, boca, olhos, ouvidos) {
        this.nariz = nariz;
        this.boca = boca;
        this.olhos = olhos;
        this.ouvidos = ouvidos;
    }
}
class PessoaAdulta extends Pessoa {
    constructor(nariz, boca, olhos, ouvidos, altura) {
        super(nariz, boca, olhos, ouvidos);
        this.alturaMedia = altura;
    }
}
const Guilherme = new Pessoa('grande', 'grande', 'azuis', 'médio');
const GuilhermeAdulto = new PessoaAdulta('grande', 'grande', 'azuis', 'médio', 1.88);
console.log(GuilhermeAdulto.alturaMedia);
