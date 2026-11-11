export interface ItemPedido {
  nome: string;
  precoCentavos: number;
  quantidade: number;
}

export class Pedido {
  private itens: ItemPedido[] = [];

  adicionar(nome: string, precoCentavos: number, quantidade: number): void {
    this.itens.push({
      nome,
      precoCentavos,
      quantidade,
    });
  }

  total(): number {
    let soma: number = 0;
    for (const item of this.itens) {
      soma += item.precoCentavos * item.quantidade;
    }
    return soma;
  }

  resumo(): string {
    return `${this.itens.length} itens · total: ${this.total().toFixed(2)}`;
  }
}
