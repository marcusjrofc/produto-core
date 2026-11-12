export interface IProduto {
  id: number;
  nome: string;
  preco: number;
  categoria?: string;
}

export class Produto implements IProduto {
  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public categoria: string = 'Geral'
  ) {}

  public aplicarDesconto(percentual: number): number {
    this.preco -= this.preco * (percentual / 100);
    return this.preco;
  }
}