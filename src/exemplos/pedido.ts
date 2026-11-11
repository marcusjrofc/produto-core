import { Pedido } from "../dominio/pedido";

const pedido = new Pedido();

pedido.adicionar("arroz 5 kg", 2490, 1);
pedido.adicionar("feijão 1 kg", 799, 2);
pedido.adicionar("banana", 890, 2);

console.log(pedido.resumo());
