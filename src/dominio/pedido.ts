export interface ProdutoDoPedido {
  readonly nome: string;
  precoPorQuantidade(quantidade: number): number;
}

export interface EstoqueDoPedido {
  disponivel(nome: string): number;
  saida(nome: string, quantidade: number): boolean;
}

export class ItemPedido {
  readonly produto: ProdutoDoPedido;
  readonly quantidade: number;

  constructor(produto: ProdutoDoPedido, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  subtotal(): number {
    return this.produto.precoPorQuantidade(this.quantidade);
  }
}

export class Pedido {
  private itens: ItemPedido[] = [];
  private status: "aberto" | "finalizado" = "aberto";
  private estoque: EstoqueDoPedido;

  constructor(estoque: EstoqueDoPedido) {
    this.estoque = estoque;
  }

  adicionar(produto: ProdutoDoPedido, quantidade: number): boolean {
    if (this.status === "finalizado") {
      return false;
    }

    if (this.estoque.disponivel(produto.nome) < quantidade) {
      return false;
    }

    this.itens.push(new ItemPedido(produto, quantidade));
    return true;
  }

  finalizar(): boolean {
    if (this.status === "finalizado") {
      return false;
    }

    for (const item of this.itens) {
      this.estoque.saida(item.produto.nome, item.quantidade);
    }

    this.status = "finalizado";
    return true;
  }

  total(): number {
    let soma: number = 0;
    for (const item of this.itens) {
      soma += item.subtotal();
    }
    return soma;
  }

  resumo(): string {
    const totalReais = (this.total() / 100).toFixed(2);
    return `${this.itens.length} itens · ${totalReais} · ${this.status}`;
  }
}
