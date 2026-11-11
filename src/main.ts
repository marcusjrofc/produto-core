import { Catalogo } from "./catalogo";

const catalogo = new Catalogo();

// Lembre-se de verificar se o caminho "dados/produtos.json" 
// está correto em relação à pasta onde corre o comando no terminal.
catalogo.carregar("dados/produtos.json");

console.log(`${catalogo.getQuantidadeProdutos()} produtos carregados`);
console.log(catalogo.precoDe("arroz 5 kg"));
console.log(catalogo.precoDe("feijão 1 kg"));