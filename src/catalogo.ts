import * as fs from "fs";

// 1. Definimos a "forma" que um Produto tem
export interface Produto {
  nome: string;
  preco_centavos: number;
  // Se o JSON tiver mais campos (como 'id' ou 'categoria'), pode adicioná-los aqui depois
}

export class Catalogo {
  // 2. Encapsulamento: a lista de produtos é privada
  private produtos: Produto[] = [];

  // 3. O método carregar preenche a nossa lista privada
  public carregar(caminho: string): void {
    const texto = fs.readFileSync(caminho, "utf8");
    const json = JSON.parse(texto);
    this.produtos = json.dados;
  }

  // 4. O método buscar procura dentro da própria classe (this.produtos)
  public buscar(nome: string): Produto | undefined {
    // Usamos o método .find() do JavaScript que é mais moderno que o for-loop
    return this.produtos.find(produto => produto.nome === nome);
  }

  // 5. O método precoDe reutiliza o método buscar
  public precoDe(nome: string): number {
    const produto = this.buscar(nome);
    
    if (produto) {
      return produto.preco_centavos;
    } else {
      // Proteção caso o produto não exista no JSON
      throw new Error(`Erro: Produto '${nome}' não encontrado no catálogo.`);
    }
  }
  
  // Método extra só para podermos ver quantos produtos foram carregados
  public getQuantidadeProdutos(): number {
    return this.produtos.length;
  }
}