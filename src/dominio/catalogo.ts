import { Produto } from './produto';

export class Catalogo {
  private produtos: Produto[] = [];

  public adicionar(produto: Produto): void {
    const jaExiste = this.buscarPorId(produto.id);
    if (jaExiste) {
      throw new Error(`Já existe um produto cadastrado com o ID ${produto.id}.`);
    }
    this.produtos.push(produto);
  }

  public buscarPorId(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  public listarTodos(): Produto[] {
    return [...this.produtos];
  }
}