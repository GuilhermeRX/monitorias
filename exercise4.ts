interface IPessoa {
  nariz: string
  boca: string
  olhos: string
  ouvidos: string
}

interface IPessoaAdulta extends IPessoa {
  alturaMedia: number
}

class Pessoa implements IPessoa {
  nariz: string
  boca: string
  olhos: string
  ouvidos: string

  constructor(nariz: string, boca: string, olhos: string, ouvidos: string) {
    this.nariz = nariz
    this.boca = boca
    this.olhos = olhos
    this.ouvidos = ouvidos
  }
}

class PessoaAdulta extends Pessoa implements IPessoaAdulta {
  alturaMedia: number

  constructor(nariz: string, boca: string, olhos: string, ouvidos: string, altura: number) {
    super(nariz, boca, olhos, ouvidos)
    this.alturaMedia = altura
  }
}

const Guilherme = new Pessoa('grande', 'grande', 'azuis', 'médio')
const GuilhermeAdulto = new PessoaAdulta('grande', 'grande', 'azuis', 'médio', 1.88)

console.log(GuilhermeAdulto.alturaMedia)
