export interface ItemPedido {
  nome: string;
  precoCentavos: number;
  quantidade: number;
}

export class Pedido {
  private itens: ItemPedido[] = [];

  public adicionar(nome: string, precoCentavos: number, quantidade: number): void {
    if (quantidade <= 0) {
      console.log("Erro: A quantidade deve ser maior que zero.");
      return;
    }

    this.itens.push({ nome, precoCentavos, quantidade });
  }

  public total(): number {
    return this.itens.reduce(
      (soma, item) => soma + item.precoCentavos * item.quantidade,
      0
    );
  }

  public resumo(): string {
    return `${this.itens.length} itens · total em centavos: ${this.total()}`;
  }
}