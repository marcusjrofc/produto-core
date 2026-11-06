// legado/pedido.js · o que o cliente está levando
const nomes = [];
const precos = [];
const quantidades = [];

function adicionar(nome, precoCentavos, quantidade) {
  nomes.push(nome);
  precos.push(precoCentavos);
  quantidades.push(quantidade);
}

function total() {
  let soma = 0;
  for (let i = 0; i < nomes.length; i++) {
    soma = soma + precos[i] * quantidades[i];
  }
  return soma;
}

function resumo() {
  return nomes.length + " itens · total em centavos: " + total();
}

adicionar("arroz 5 kg", 2490, 1);
adicionar(799, "feijão 1 kg", 2);
adicionar("banana", 890, 2);
console.log(resumo());

module.exports = { adicionar, total, resumo };
