export interface ItemEstoque {
  nome: string;
  quantidade: number;
}

export class Estoque {
  itens: ItemEstoque[] = []

  posicao(nome: string): number {
    return this.itens.findIndex((item) => item.nome === nome)
  }

  entrada(nome: string, quantidade: number): void {
    const i = this.posicao(nome);

    if (i === -1) {
      this.itens.push({nome:nome, quantidade:quantidade})
    } else {
      this.itens[i].quantidade = this.itens[i].quantidade + quantidade;
    }
  }

  saida(nome: string, quantidade: number): void {
    const i = this.posicao(nome);
    this.itens[i].quantidade = this.itens[i].quantidade - quantidade;
  }

  disponivel(nome: string): number {
   const i = this.posicao(nome)
   if(i === -1){
    return 0;
   }
   return this.itens[i].quantidade;
  }
}