// Imports atualizados para refletir a nova organização de pastas do E25
import { Produto } from './dominio/produto';
import { Catalogo } from './dominio/catalogo';
import { Estoque } from './dominio/estoque';
import { Pedido } from './dominio/pedido';

function executarSistema(): void {
  console.log('==========================================');
  console.log('     MERCADINHO - CAIXA #01       ');
  console.log('==========================================\n');

  const catalogo = new Catalogo();
  const estoque = new Estoque();

  const prod1 = new Produto(1, 'Arroz Tipo 1 5kg', 26.90, 'Alimentos');
  const prod2 = new Produto(2, 'Feijão Carioca 1kg', 7.50, 'Alimentos');
  const prod3 = new Produto(3, 'Leite Integral 1L', 4.80, 'Laticínios');
  const prod4 = new Produto(4, 'Café Torrado 500g', 16.50, 'Matinais');

  catalogo.adicionar(prod1);
  catalogo.adicionar(prod2);
  catalogo.adicionar(prod3);
  catalogo.adicionar(prod4);

  estoque.adicionarProduto(prod1, 10);
  estoque.adicionarProduto(prod2, 25);
  estoque.adicionarProduto(prod3, 50);
  estoque.adicionarProduto(prod4, 3);

  console.log('--- CATÁLOGO DE PRODUTOS ---');
  console.table(catalogo.listarTodos());

  console.log('\n--- PROCESSANDO COMPRA / PEDIDO #5001 ---');
  const pedido = new Pedido(5001);

  // Executa o caminho da compra e valida o contrato EstoqueDoPedido
  pedido.adicionarItem(prod1, 2, estoque);
  pedido.adicionarItem(prod2, 3, estoque);
  pedido.adicionarItem(prod3, 4, estoque);
  pedido.adicionarItem(prod4, 5, estoque); // Vai falhar bloqueado pelo estoque

  console.log('\n--- CUPOM FISCAL / RESUMO DA COMPRA ---');
  pedido.itens.forEach((item) => {
    console.log(
      `- ${item.quantidade}x ${item.produto.nome} | Subtotal: R$ ${item.subtotal.toFixed(2)}`
    );
  });

  console.log(`\nValor Total da Compra: R$ ${pedido.calcularTotal().toFixed(2)}`);

  pedido.finalizar();
  console.log(`Status do Pedido: ${pedido.status}`);

  console.log('\n--- ESTOQUE ATUALIZADO DO MERCADINHO ---');
  estoque.listarItens().forEach((item) => {
    console.log(`${item.produto.nome}: ${item.quantidade} un`);
  });
}

executarSistema();