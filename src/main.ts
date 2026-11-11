import { Catalogo } from "./catalogo";

const catalogo = new Catalogo();
catalogo.carregar("dados/produtos.json");

console.log(`${catalogo.getQuantidadeProdutos()} produtos carregados`);
console.log(catalogo.precoDe("arroz 5 kg"));
console.log(catalogo.precoDe("feijão 1 kg"));