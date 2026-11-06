// legado/produto.js · escrito em JavaScript, do jeito do Módulo 2
function criarProduto(nome, precoCentavos, unidade, categoria) {
  return { nome: nome, precoCentavos: precoCentavos, unidade: unidade, categoria: categoria };
}

function precoEmReais(produto) {
  return "R$ " + (produto.precoCentavos / 100).toFixed(2);
}

function precoPorQuantidade(produto, quantidade) {
  return produto.precoCentavos * quantidade;
}

const arroz = criarProduto("arroz 5 kg", 2490, "un", "mercearia");
const banana = criarProduto("banana", "8,90", "kg", "hortifruti");
const leite = criarProduto("leite 1 l", 539, "UN", "laticínios");

console.log(precoEmReais(arroz));
console.log(precoEmReais(banana));
console.log(precoPorQuantidade(leite, 3), leite.unidade);

module.exports = { criarProduto, precoEmReais, precoPorQuantidade };
