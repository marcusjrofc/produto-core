import { Produto } from './produto';
import { Estoque } from './estoque';

export interface ItemPedido {
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
}

export class Pedido {
  public id: number;
  public itens: ItemPedido[] = [];
  public status: 'PENDENTE' | 'APROVADO' | 'REJEITADO' = 'PENDENTE';

  constructor(id: number) {
    this.id = id;
  }

  public adicionarItem(produto: Produto, quantidade: number, estoque: Estoque): boolean {
    if (estoque.darBaixa(produto.id, quantidade)) {
      this.itens.push({
        produto,
        quantidade,
        precoUnitario: produto.preco
      });
      return true;
    }
    console.log(`[ERRO] Estoque insuficiente para o produto: ${produto.nome}`);
    return false;
  }

  public calcularTotal(): number {
    return this.itens.reduce((total, item) => total + item.precoUnitario * item.quantidade, 0);
  }

  public finalizar(): void {
    if (this.itens.length > 0) {
      this.status = 'APROVADO';
    } else {
      this.status = 'REJEITADO';
    }
  }
}