import { Produto } from './produto';

export class Estoque {
  private itens: Map<number, { produto: Produto; quantidade: number }> = new Map();

  public adicionarProduto(produto: Produto, quantidade: number): void {
    const itemAtual = this.itens.get(produto.id);
    if (itemAtual) {
      itemAtual.quantidade += quantidade;
    } else {
      this.itens.set(produto.id, { produto, quantidade });
    }
  }

  public consultarQuantidade(produtoId: number): number {
    return this.itens.get(produtoId)?.quantidade || 0;
  }

  public darBaixa(produtoId: number, quantidade: number): boolean {
    const item = this.itens.get(produtoId);
    if (!item || item.quantidade < quantidade) {
      return false;
    }
    item.quantidade -= quantidade;
    return true;
  }
}