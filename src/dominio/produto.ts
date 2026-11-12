// Representa cada mercadoria cadastrada no mercadinho
export class Produto {
  // 'readonly' impede que o código de identificação seja alterado depois de criado
  public readonly id: number;
  public nome: string;
  public preco: number;
  public categoria: string;

  constructor(
    id: number,
    nome: string,
    preco: number,
    categoria: string = 'Geral'
  ) {
    // Trava de segurança: impede cadastrar produtos com dados absurdos
    if (id <= 0) throw new Error('O ID do produto deve ser maior que zero.');
    if (!nome.trim()) throw new Error('O nome do produto não pode ficar vazio.');
    if (preco < 0) throw new Error('O preço do produto não pode ser negativo.');

    this.id = id;
    this.nome = nome.trim();
    this.preco = this.arredondar(preco);
    this.categoria = categoria;
  }

  // Aplica um desconto percentual válido (entre 0% e 100%) e ajusta os centavos
  public aplicarDesconto(percentual: number): number {
    if (percentual < 0 || percentual > 100) {
      throw new Error('O percentual de desconto deve estar entre 0 e 100.');
    }

    const valorDesconto = this.preco * (percentual / 100);
    this.preco = this.arredondar(this.preco - valorDesconto);
    return this.preco;
  }

  // Evita erros clássicos de casas decimais do JavaScript (ex: 24.210000000000004)
  private arredondar(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}