// legado/cliente.js · quem está comprando
const nomes = [];
const telefones = [];
const bairros = [];
const aceitaWhatsapp = [];

function cadastrar(nome, telefone, bairro, whatsapp) {
  nomes.push(nome);
  telefones.push(telefone);
  bairros.push(bairro);
  aceitaWhatsapp.push(whatsapp);
}

function telefoneValido(telefone) {
  return telefone.length === 11;
}

function podeAvisarPeloWhatsapp(i) {
  return aceitaWhatsapp[i] && telefoneValido(telefones[i]);
}

cadastrar("Ana", "79991234567", "Atalaia", true);
cadastrar("Caio", 79998765432, "Siqueira Campos", true);
cadastrar("Bia", "79990001111", "Centro", "não");

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i], podeAvisarPeloWhatsapp(i));
}

module.exports = { cadastrar, telefoneValido, podeAvisarPeloWhatsapp };
