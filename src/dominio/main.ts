import Estoque  from "./estoque";

const estoque = new Estoque();

estoque.entrada("arroz 5 kg", 10);
estoque.entrada("arroz 5 kg", 5);
estoque.saida("arroz 5 kg", 3);
console.log(estoque.disponivel("arroz 5 kg"));