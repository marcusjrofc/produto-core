export class Estoque {
  nomes: string[] = [];
  quantidades: number[] = [];

  posicao(nome: string): number {
    return this.nomes.indexOf(nome);
  }

  entrada(nome: string, quantidade: number): void {
    const i = this.posicao(nome);

    if (i === -1) {
      this.nomes.push(nome);
      this.quantidades.push(quantidade);
    } else {
      this.quantidades[i] = this.quantidades[i] + quantidade;
    }
  }

  saida(nome: string, quantidade: number): void {
    const i = this.posicao(nome);
    this.quantidades[i] = this.quantidades[i] - quantidade;
  }

  disponivel(nome: string): number {
    return this.quantidades[this.posicao(nome)];
  }
}