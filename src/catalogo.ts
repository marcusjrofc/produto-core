import * as fs from "fs";

export interface Produto {
    nome: string;
    preco_centavos: number;
}

export class Catalogo {
    private produtos: Produto[] = [];

    public carregar(caminho: string): void {
        const texto = fs.readFileSync(caminho, "utf8");
        const json = JSON.parse(texto);
        this.produtos = json.dados;
    }

    public buscar(nome: string): Produto | undefined {
        return this.produtos.find(produto => produto.nome === nome);
    }

    public precoDe(nome: string): number {
        const produto = this.buscar(nome);
        if (produto) {
            return produto.preco_centavos;
        } else {

            throw new Error(`Erro: Produto '${nome}' não encontrado no catálogo.`);
        }
    }

    public getQuantidadeProdutos(): number {
        return this.produtos.length;
    }
}