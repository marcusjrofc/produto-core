import { EstoqueDoPedido, Pedido, ProdutoDoPedido } from "../dominio/pedido";

const arroz: ProdutoDoPedido = {
  nome: "arroz 5 kg",
  precoPorQuantidade(quantidade: number): number {
    return 2490 * quantidade;
  },
};

const banana: ProdutoDoPedido = {
  nome: "banana",
  precoPorQuantidade(quantidade: number): number {
    return 890 * quantidade;
  },
};

const estoqueTeste: EstoqueDoPedido = {
  disponivel(nome: string): number {
    if (nome === "arroz 5 kg") return 5;
    if (nome === "banana") return 4;
    return 0;
  },
  saida(nome: string, quantidade: number): boolean {
    console.log(`Baixa no estoque: ${quantidade}x ${nome}`);
    return true;
  },
};

const pedido = new Pedido(estoqueTeste);

console.log(pedido.adicionar(arroz, 1));
console.log(pedido.adicionar(banana, 2));
console.log(pedido.adicionar(arroz, 10));

console.log(pedido.resumo());

pedido.finalizar();
console.log(pedido.resumo());

console.log(pedido.adicionar(arroz, 1));
