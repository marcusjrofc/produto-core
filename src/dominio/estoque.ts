import { Produto } from './produto';

// Contrato exigido pelo Pedido (Devolutiva E25)
export interface EstoqueDoPedido {
  saida(produtoId: number, quantidade: number): boolean;
}

export interface ItemEstoque {
  produto: Produto;
  quantidade: number;
}

export class Estoque implements EstoqueDoPedido {
  private itens: Map<number, ItemEstoque> = new Map();

  public adicionarProduto(produto: Produto, quantidade: number): void {
    if (quantidade <= 0) {
      throw new Error('A quantidade adicionada deve ser maior que zero.');
    }
    const itemAtual = this.itens.get(produto.id);
    if (itemAtual) {
      itemAtual.quantidade += quantidade;
    } else {
      this.itens.set(produto.id, { produto, quantidade });
    }
  }

  public consultarItem(produtoId: number): ItemEstoque | undefined {
    return this.itens.get(produtoId);
  }

  public consultarQuantidade(produtoId: number): number {
    return this.itens.get(produtoId)?.quantidade ?? 0;
  }

  // Implementação do contrato EstoqueDoPedido
  public saida(produtoId: number, quantidade: number): boolean {
    if (quantidade <= 0) return false;

    const item = this.itens.get(produtoId);
    if (!item || item.quantidade < quantidade) {
      return false;
    }

    item.quantidade -= quantidade;
    return true;
  }

  public listarItens(): ItemEstoque[] {
    return Array.from(this.itens.values());
  }
}