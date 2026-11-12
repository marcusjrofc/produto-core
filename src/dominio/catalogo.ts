import { Produto } from './produto';

// Funciona como a vitrine/lista oficial de produtos que o mercadinho vende
export class Catalogo {
  // 'private' protege a lista para que ninguém apague produtos sem usar os métodos abaixo
  private produtos: Produto[] = [];

  // Cadastra um novo produto, impedindo códigos (IDs) duplicados
  public adicionar(produto: Produto): void {
    const jaExiste = this.buscarPorId(produto.id);
    if (jaExiste) {
      throw new Error(`Já existe um produto cadastrado com o ID ${produto.id}.`);
    }
    this.produtos.push(produto);
  }

  // Procura um produto específico pelo seu código numérico
  public buscarPorId(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  // Devolve uma cópia da lista ([...]) para evitar alterações acidentais por fora
  public listarTodos(): Produto[] {
    return [...this.produtos];
  }
}