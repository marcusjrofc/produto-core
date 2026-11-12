import { Catalogo } from "./catalogo";

const catalogo = new Catalogo();
catalogo.carregar("dados/produtos.json");

console.log(`${catalogo.getQuantidadeProdutos()} produtos carregados`);
console.log(catalogo.precoDe("arroz 5 kg"));
console.log(catalogo.precoDe("feijão 1 kg"));
import {Estoque}  from "./estoque";

const estoque = new Estoque();

estoque.entrada("arroz 5 kg", 10);
estoque.entrada("arroz 5 kg", 5);
estoque.saida("arroz 5 kg", 3);
console.log(estoque.disponivel("arroz 5 kg"));
