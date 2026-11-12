import { Produto, ProdutoDoPedido } from './produto';
import { EstoqueDoPedido } from './estoque';

export interface ItemPedido {
  produto: Produto;
  quantidade: number;
  subtotal: number;
}

export type StatusPedido = 'PENDENTE' | 'APROVADO' | 'REJEITADO';

export class Pedido {
  public readonly id: number;
  private _itens: ItemPedido[] = [];
  private _status: StatusPedido = 'PENDENTE';

  constructor(id: number) {
    if (id <= 0) throw new Error('O ID do pedido deve ser maior que zero.');
    this.id = id;
  }

  public get itens(): ItemPedido[] {
    return [...this._itens];
  }

  public get status(): StatusPedido {
    return this._status;
  }

  // O método agora depende estritamente dos contratos definidos
  public adicionarItem(produto: Produto, quantidade: number, estoque: EstoqueDoPedido): boolean {
    if (this._status !== 'PENDENTE') {
      console.log(`[ERRO] Não é possível alterar o pedido #${this.id}, pois já está ${this._status}.`);
      return false;
    }

    if (quantidade <= 0) {
      console.log(`[ERRO] Quantidade inválida para o produto: ${produto.nome}`);
      return false;
    }

    // Comunica com o estoque usando o método do contrato
    if (!estoque.saida(produto.id, quantidade)) {
      console.log(`[ERRO] Estoque insuficiente para o produto: ${produto.nome}`);
      return false;
    }

    const itemExistente = this._itens.find((item) => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
      // Comunica com o produto usando o método do contrato
      itemExistente.subtotal = produto.precoPorQuantidade(itemExistente.quantidade);
    } else {
      this._itens.push({
        produto,
        quantidade,
        subtotal: produto.precoPorQuantidade(quantidade),
      });
    }

    return true;
  }

  public calcularTotal(): number {
    const total = this._itens.reduce((soma, item) => soma + item.subtotal, 0);
    return Math.round(total * 100) / 100;
  }

  public finalizar(): void {
    if (this._status !== 'PENDENTE') return;
    this._status = this._itens.length > 0 ? 'APROVADO' : 'REJEITADO';
  }
}