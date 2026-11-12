// Contrato exigido pelo Pedido (Devolutiva E25)
export interface ProdutoDoPedido {
  nome: string;
  precoPorQuantidade(quantidade: number): number;
}

export class Produto implements ProdutoDoPedido {
  public readonly id: number;
  public nome: string;
  public preco: number;
  public categoria: string;

  constructor(
    id: number,
    nome: string,
    preco: number,
    categoria: string = 'Geral'
  ) {
    if (id <= 0) throw new Error('O ID do produto deve ser maior que zero.');
    if (!nome.trim()) throw new Error('O nome do produto não pode ficar vazio.');
    if (preco < 0) throw new Error('O preço não pode ser negativo.');

    this.id = id;
    this.nome = nome.trim();
    this.preco = this.arredondar(preco);
    this.categoria = categoria;
  }

  // Implementação do contrato ProdutoDoPedido
  public precoPorQuantidade(quantidade: number): number {
    if (quantidade <= 0) return 0;
    return this.arredondar(this.preco * quantidade);
  }

  public aplicarDesconto(percentual: number): number {
    if (percentual < 0 || percentual > 100) {
      throw new Error('O percentual de desconto deve estar entre 0 e 100.');
    }
    const valorDesconto = this.preco * (percentual / 100);
    this.preco = this.arredondar(this.preco - valorDesconto);
    return this.preco;
  }

  private arredondar(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}