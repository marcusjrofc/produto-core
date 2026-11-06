// legado/historico.js · Aguaraçu · o preço de hoje está bom, normal ou alto?
const datas = ["2026-08-05", "2026-09-04", "2026-10-06"];
const precos = [849, 799, 829];

function registrar(data, precoCentavos) {
  datas.push(data);
  precos.push(precoCentavos);
}

function media() {
  let soma = 0;
  for (let i = 0; i < precos.length; i++) {
    soma = soma + precos[i];
  }
  return soma / precos.length;
}

function classificar(precoHoje) {
  const m = media();
  if (precoHoje < m * 0.95) return "bom";
  if (precoHoje > m * 1.05) return "Alto";
  return "normal";
}

console.log(media().toFixed(0), classificar(799));
registrar("2026-11-05", "8,49");
console.log(media(), classificar(899));

module.exports = { registrar, media, classificar };
