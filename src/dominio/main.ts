import { Produto } from './produto';
import { Catalogo } from './catalogo';
import { Estoque } from './estoque';
import { Pedido, ItemPedido } from './pedido';

function executarSistema(): void {
  console.log("==========================================");
  console.log("     MERCADINHO - CAIXA #01       ");
  console.log("==========================================\n");

  const catalogo = new Catalogo();
  const estoque = new Estoque();

  const prod1 = new Produto(1, "Arroz Tipo 1 5kg", 26.90, "Alimentos");
  const prod2 = new Produto(2, "Feijão Carioca 1kg", 7.50, "Alimentos");
  const prod3 = new Produto(3, "Leite Integral 1L", 4.80, "Laticínios");
  const prod4 = new Produto(4, "Café Torrado 500g", 16.50, "Matinais");

  catalogo.adicionar(prod1);
  catalogo.adicionar(prod2);
  catalogo.adicionar(prod3);
  catalogo.adicionar(prod4);

  estoque.adicionarProduto(prod1, 10);
  estoque.adicionarProduto(prod2, 25);
  estoque.adicionarProduto(prod3, 50);
  estoque.adicionarProduto(prod4, 3);

  console.log("--- CATÁLOGO DE PRODUTOS ---");
  console.table(catalogo.listarTodos());

  console.log("\n--- PROCESSANDO COMPRA / PEDIDO #5001 ---");
  const pedido = new Pedido(5001);

  pedido.adicionarItem(prod1, 2, estoque);
  pedido.adicionarItem(prod2, 3, estoque);
  pedido.adicionarItem(prod3, 4, estoque);
  pedido.adicionarItem(prod4, 5, estoque);

  console.log("\n--- CUPOM FISCAL / RESUMO DA COMPRA ---");
  pedido.itens.forEach((item: ItemPedido) => {
    const subtotal = item.precoUnitario * item.quantidade;
    console.log(`- ${item.quantidade}x ${item.produto.nome} | Un: R$ ${item.precoUnitario.toFixed(2)} | Subtotal: R$ ${subtotal.toFixed(2)}`);
  });

  console.log(`\nValor Total da Compra: R$ ${pedido.calcularTotal().toFixed(2)}`);

  pedido.finalizar();
  console.log(`Status do Pedido: ${pedido.status}`);

  console.log("\n--- ESTOQUE ATUALIZADO DO MERCADINHO ---");
  console.log(`Arroz restante: ${estoque.consultarQuantidade(prod1.id)} un`);
  console.log(`Feijão restante: ${estoque.consultarQuantidade(prod2.id)} un`);
  console.log(`Leite restante: ${estoque.consultarQuantidade(prod3.id)} un`);
  console.log(`Café restante: ${estoque.consultarQuantidade(prod4.id)} un`);
}

executarSistema();''