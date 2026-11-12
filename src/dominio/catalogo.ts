import { Produto } from './produto';

export class Catalogo {
  private produtos: Produto[] = [];

  public adicionar(produto: Produto): void {
    this.produtos.push(produto);
  }

  public buscarPorId(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }

  public listarTodos(): Produto[] {
    return this.produtos;
  }
}