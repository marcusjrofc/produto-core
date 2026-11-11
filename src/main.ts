import { Pedido } from "./pedido";

const pedido = new Pedido();

pedido.adicionar("arroz 5 kg", 24.90, 1);
pedido.adicionar("feijão 1 kg", 7.99, 2);
pedido.adicionar("banana", 8.90, 2);

console.log(pedido.resumo());
