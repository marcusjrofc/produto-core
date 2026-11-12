import { Produto } from './dominio/produto';
import { Catalogo } from './dominio/catalogo';
import { Estoque } from './dominio/estoque';
import { Pedido, ItemPedido } from './dominio/pedido';

function executarSistema(): void {
  console.log('==========================================');
  console.log('     MERCADINHO - CAIXA #01       ');
  console.log('==========================================\n');

  // 1. Inicializa o catálogo (vitrine) e o estoque (depósito)
  const catalogo = new Catalogo();
  const estoque = new Estoque();

  // 2. Cria os produtos disponíveis na loja
  const prod1 = new Produto(1, 'Arroz Tipo 1 5kg', 26.90, 'Alimentos');
  const prod2 = new Produto(2, 'Feijão Carioca 1kg', 7.50, 'Alimentos');
  const prod3 = new Produto(3, 'Leite Integral 1L', 4.80, 'Laticínios');
  const prod4 = new Produto(4, 'Café Torrado 500g', 16.50, 'Matinais');

  // 3. Registra os produtos no catálogo
  catalogo.adicionar(prod1);
  catalogo.adicionar(prod2);
  catalogo.adicionar(prod3);
  catalogo.adicionar(prod4);

  // 4. Abastece o estoque inicial de cada produto
  estoque.adicionarProduto(prod1, 10);
  estoque.adicionarProduto(prod2, 25);
  estoque.adicionarProduto(prod3, 50);
  estoque.adicionarProduto(prod4, 3); // Apenas 3 pacotes de café disponíveis

  // 5. Exibe a tabela com os produtos cadastrados
  console.log('--- CATÁLOGO DE PRODUTOS ---');
  console.table(catalogo.listarTodos());

  // 6. Inicia um novo atendimento no caixa
  console.log('\n--- PROCESSANDO COMPRA / PEDIDO #5001 ---');
  const pedido = new Pedido(5001);

  // Tenta passar os itens no caixa (o café vai falhar por pedir 5 tendo apenas 3)
  pedido.adicionarItem(prod1, 2, estoque);
  pedido.adicionarItem(prod2, 3, estoque);
  pedido.adicionarItem(prod3, 4, estoque);
  pedido.adicionarItem(prod4, 5, estoque);

  // 7. Imprime o resumo dos itens que realmente entraram na compra
  console.log('\n--- CUPOM FISCAL / RESUMO DA COMPRA ---');
  pedido.itens.forEach((item: ItemPedido) => {
    const subtotal = item.precoUnitario * item.quantidade;
    console.log(
      `- ${item.quantidade}x ${item.produto.nome} | Un: R$ ${item.precoUnitario.toFixed(2)} | Subtotal: R$ ${subtotal.toFixed(2)}`
    );
  });

  console.log(`\nValor Total da Compra: R$ ${pedido.calcularTotal().toFixed(2)}`);

  // 8. Fecha o pedido e mostra o status final
  pedido.finalizar();
  console.log(`Status do Pedido: ${pedido.status}`);

  // 9. Percorre o estoque atualizado para conferir o saldo restante
  console.log('\n--- ESTOQUE ATUALIZADO DO MERCADINHO ---');
  estoque.listarItens().forEach((item) => {
    console.log(`${item.produto.nome}: ${item.quantidade} un`);
  });
}

// Inicia a execução do sistema (sem as aspas extras que quebravam o build)
executarSistema();