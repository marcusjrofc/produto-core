// legado/estoque.js · quanto tem de cada produto
const nomes = [];
const quantidades = [];

function posicao(nome) {
  return nomes.indexOf(nome);
}

function entrada(nome, quantidade) {
  const i = posicao(nome);
  if (i === -1) {
    nomes.push(nome);
    quantidades.push(quantidade);
  } else {
    quantidades[i] = quantidades[i] + quantidade;
  }
}

function saida(nome, quantidade) {
  const i = posicao(nome);
  quantidades[i] = quantidades[i] - quantidade;
}

function disponivel(nome) {
  return quantidades[posicao(nome)];
}

entrada("arroz 5 kg", 10);
entrada("arroz 5 kg", "5");
saida("arroz 5 kg", 3);
console.log(disponivel("arroz 5 kg"));
entrada("feijão 1 kg", 4);
saida("feijão 1 kg", 9);
console.log(disponivel("feijão 1 kg"));

module.exports = { entrada, saida, disponivel };
