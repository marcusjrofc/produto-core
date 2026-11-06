// legado/catalogo.js · lê os produtos que "a API" mandou
const fs = require("fs");

function carregar(caminho) {
  const texto = fs.readFileSync(caminho, "utf8");
  return JSON.parse(texto).dados;
}

function buscar(produtos, nome) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      return produtos[i];
    }
  }
}

function precoDe(produtos, nome) {
  return buscar(produtos, nome).preco_centavos;
}

const produtos = carregar("dados/produtos.json");
console.log(produtos.length + " produtos carregados");
console.log(precoDe(produtos, "arroz 5 kg"));
console.log(precoDe(produtos, "feijao 1 kg"));

module.exports = { carregar, buscar, precoDe };
