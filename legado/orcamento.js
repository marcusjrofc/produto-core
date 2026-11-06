// legado/orcamento.js · Pegasus · a cesta não pode estourar o orçamento
const precos = [2490, 799, 749];
const quantidades = [1, 2, 2];
let limiteCentavos = 6000;

function gasto() {
  let soma = 0;
  for (let i = 0; i < precos.length; i++) {
    soma = soma + precos[i] * quantidades[i];
  }
  return soma;
}

function saldo() {
  return limiteCentavos - gasto();
}

function estourou() {
  return gasto() > limiteCentavos;
}

function mudarLimite(novoLimite) {
  limiteCentavos = novoLimite;
}

console.log(gasto(), saldo(), estourou());
mudarLimite("50,00");
console.log(gasto(), saldo(), estourou());

module.exports = { gasto, saldo, estourou, mudarLimite };
