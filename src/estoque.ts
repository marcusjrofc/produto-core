export interface ItemEstoque {
  nome: string;
  quantidade: number;
}

export class Estoque {
  private itens: ItemEstoque[] = []

  private posicao(nome: string): number {
    return this.itens.findIndex((item) => item.nome === nome)
  }

  public entrada(nome: string, quantidade: number): void {
    const i = this.posicao(nome);

    if (i === -1) {
      this.itens.push({ nome: nome, quantidade: quantidade })
    } else {
      this.itens[i].quantidade = this.itens[i].quantidade + quantidade;
    }
  }

  public saida(nome: string, quantidade: number): void {
    const i = this.posicao(nome);
    if (i !== -1) {
      if (this.itens[i].quantidade >= quantidade) {
        this.itens[i].quantidade = this.itens[i].quantidade - quantidade;
      }else{
        console.log(`Erro: Estoque insuficiente para ${nome}.`)
      }
    }
  }

  public disponivel(nome: string): number {
    const i = this.posicao(nome)
    if (i === -1) {
      return 0;
    }
    return this.itens[i].quantidade;
  }
}