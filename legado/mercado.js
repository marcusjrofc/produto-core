// legado/mercado.js · JOVEMDEV · o mais barato de verdade, contando o deslocamento
const mercados = ["Mercadinho A", "Atacarejo B", "Supermercado C"];
const totaisCentavos = [21890, 19750, 20400];
const distanciasKm = [0.8, 6.5, 3];
const custoPorKmCentavos = 120;

function custoReal(i) {
  return totaisCentavos[i] + distanciasKm[i] * 2 * custoPorKmCentavos;
}

function maisBarato() {
  let melhor = 0;
  for (let i = 1; i < mercados.length; i++) {
    if (custoReal(i) < custoReal(melhor)) {
      melhor = i;
    }
  }
  return mercados[melhor];
}

console.log(maisBarato());
distanciasKm[2] = "3,5";
console.log(custoReal(2), maisBarato());

module.exports = { custoReal, maisBarato };
