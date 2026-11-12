import { Produto } from './produto';

// Define o formato de cada registro guardado no estoque: qual é o produto e quantos existem
export interface ItemEstoque {
  produto: Produto;
  quantidade: number;
}

// Controla as entradas e saídas físicas das mercadorias
export class Estoque {
  // Map funciona como um dicionário rápido: busca a quantidade direto pelo ID do produto
  private itens: Map<number, ItemEstoque> = new Map();

  // Dá entrada de mercadorias no depósito
  public adicionarProduto(produto: Produto, quantidade: number): void {
    if (quantidade <= 0) {
      throw new Error('A quantidade adicionada ao estoque deve ser maior que zero.');
    }

    const itemAtual = this.itens.get(produto.id);
    if (itemAtual) {
      itemAtual.quantidade += quantidade; // Soma ao saldo que já existia
    } else {
      this.itens.set(produto.id, { produto, quantidade }); // Cria um registro novo
    }
  }

  // Retorna o registro completo (produto + quantidade) ou undefined se não existir
  public consultarItem(produtoId: number): ItemEstoque | undefined {
    return this.itens.get(produtoId);
  }

  // Retorna apenas o número de unidades disponíveis (0 se o produto não estiver no estoque)
  public consultarQuantidade(produtoId: number): number {
    return this.itens.get(produtoId)?.quantidade ?? 0;
  }

  // Tenta retirar unidades do estoque. Retorna true se conseguiu, ou false se faltou produto
  public darBaixa(produtoId: number, quantidade: number): boolean {
    if (quantidade <= 0) return false;

    const item = this.itens.get(produtoId);
    // Se o produto não existe ou o saldo é menor que o pedido, bloqueia a saída
    if (!item || item.quantidade < quantidade) {
      return false;
    }

    item.quantidade -= quantidade;
    return true;
  }

  // Lista todos os itens armazenados no estoque em formato de array simples
  public listarItens(): ItemEstoque[] {
    return Array.from(this.itens.values());
  }
}