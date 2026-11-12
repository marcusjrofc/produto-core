import { Produto } from './produto';
import { Estoque } from './estoque';

// Representa uma linha do cupom fiscal (produto comprado, quantidade e preço pago na hora)
export interface ItemPedido {
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
}

export type StatusPedido = 'PENDENTE' | 'APROVADO' | 'REJEITADO';

// Gerencia o carrinho de compras do cliente e o fechamento da venda
export class Pedido {
  public readonly id: number;
  private _itens: ItemPedido[] = [];
  private _status: StatusPedido = 'PENDENTE';

  constructor(id: number) {
    if (id <= 0) throw new Error('O ID do pedido deve ser maior que zero.');
    this.id = id;
  }

  // Permite ler os itens do pedido sem deixar que alterem o array diretamente
  public get itens(): ItemPedido[] {
    return [...this._itens];
  }

  // Permite consultar o status atual sem deixar que mudem manualmente por fora
  public get status(): StatusPedido {
    return this._status;
  }

  // Adiciona um item ao carrinho somente se o pedido ainda estiver aberto e houver estoque
  public adicionarItem(produto: Produto, quantidade: number, estoque: Estoque): boolean {
    if (this._status !== 'PENDENTE') {
      console.log(`[ERRO] Não é possível alterar o pedido #${this.id}, pois já está ${this._status}.`);
      return false;
    }

    if (quantidade <= 0) {
      console.log(`[ERRO] Quantidade inválida para o produto: ${produto.nome}`);
      return false;
    }

    // Tenta reservar/baixar a quantidade no estoque antes de colocar no carrinho
    if (!estoque.darBaixa(produto.id, quantidade)) {
      console.log(`[ERRO] Estoque insuficiente para o produto: ${produto.nome}`);
      return false;
    }

    // Se o mesmo produto já estava no carrinho com o mesmo preço, apenas soma a quantidade
    const itemExistente = this._itens.find(
      (item) => item.produto.id === produto.id && item.precoUnitario === produto.preco
    );

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this._itens.push({
        produto,
        quantidade,
        precoUnitario: produto.preco,
      });
    }

    return true;
  }

  // Soma (preço unitário x quantidade) de todos os itens e arredonda os centavos
  public calcularTotal(): number {
    const total = this._itens.reduce(
      (soma, item) => soma + item.precoUnitario * item.quantidade,
      0
    );
    return Math.round(total * 100) / 100;
  }

  // Encerra o pedido: aprova se tiver pelo menos 1 item válido; caso contrário, rejeita
  public finalizar(): void {
    if (this._status !== 'PENDENTE') return;

    this._status = this._itens.length > 0 ? 'APROVADO' : 'REJEITADO';
  }
}