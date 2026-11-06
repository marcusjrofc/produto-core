# m3-core · o backend do produto do squad

Módulo 3 · POO com TypeScript · Jovem Tech 2026 · T06D

Este é o modelo do repositório do squad. Aqui o produto que vocês pensaram no Módulo 1 ganha o seu primeiro backend: as coisas que ele guarda (produto, estoque, pedido...) e as regras que ele não pode quebrar.

## Seu computador: uma pasta, três repositórios

No Módulo 3 você trabalha sempre dentro de uma pasta só, `modulo-ts-poo`. Dentro dela ficam três repositórios diferentes, cada um com o seu GitHub:

```
modulo-ts-poo/
├── aula/              repositório seu: o que você coda junto com o professor
├── dominio/           repositório seu: a atividade de casa, no seu domínio de estudo
└── m3-core-produto/   repositório do squad: o backend do produto (este aqui)
```

`modulo-ts-poo` não é um repositório: é só a pasta que guarda os três. Nunca rode `git init` nela.

```
mkdir modulo-ts-poo
cd modulo-ts-poo
git clone <link do seu repositório da aula> aula
git clone <link do seu repositório do domínio> dominio
git clone <link do repositório do squad> m3-core-produto
```

O último nome depois do link é o nome da pasta. Antes de trabalhar, entre na pasta certa (`cd aula`, `cd dominio` ou `cd m3-core-produto`): cada pasta tem o próprio `git status`, as próprias branches e o próprio histórico.

## Criar o repositório do squad (só uma pessoa do squad)

1. Neste repositório, clique em **Use this template** → **Create a new repository**.
2. Nome: `<nome-do-produto>-core`. Visibilidade: **Public**.
3. **Settings → Collaborators → Add people**: todos do squad e `DevVitorFernandes`.
4. **Settings → Branches → Add classic branch protection rule** na `main`: marque **Require a pull request before merging** e **Require approvals: 1**. Salve.
5. Alguém da dupla confere se a regra ficou salva.

## As peças

Cada pessoa é dona de UMA peça do backend. A peça começa como um arquivo em JavaScript, do jeito que vocês escreveram no Módulo 2, na pasta `legado/`. Todo dia ela vira um pouco mais TypeScript, com o conteúdo do dia.

| Peça | Começa em | Vai para |
| --- | --- | --- |
| Produto | `legado/produto.js` | `src/dominio/produto.ts` |
| Catálogo | `legado/catalogo.js` | `src/dominio/catalogo.ts` |
| Estoque | `legado/estoque.js` | `src/dominio/estoque.ts` |
| Pedido | `legado/pedido.js` | `src/dominio/pedido.ts` |
| Cliente | `legado/cliente.js` | `src/dominio/cliente.ts` |
| Regra do squad | `legado/orcamento.js` (Pegasus) · `legado/historico.js` (Aguaraçu) · `legado/mercado.js` (JOVEMDEV) | `src/dominio/<regra>.ts` |

O squad apaga, num commit, as duas regras que não são dele.

Duplas: **produto ↔ catálogo · estoque ↔ pedido · cliente ↔ regra do squad**. Uma pessoa da dupla revisa e faz o merge do PR da outra. Ninguém aprova nem faz o merge do próprio PR.

## O fluxo de todo dia

1. **Issue.** Aba Issues → New issue → **Etapa do dia**. Preencha com o cartão do Trello do dia.
2. **Branch.** `git switch main` · `git pull` · `git switch -c 12-estoque-tipos` (número da issue, peça, etapa).
3. **Código.** Na sua peça. `npm run build` tem de terminar sem erro.
4. **Commit e push.** `git add .` · `git commit -m "refactor(estoque): tipos nos parâmetros"` · `git push -u origin 12-estoque-tipos`.
5. **Pull request.** Preencha o modelo. Na descrição, `Closes #12` fecha a issue no merge.
6. **Revisão da dupla.** Files changed → leia → **Review changes → Approve**. Depois **Merge pull request**.
7. **Evidência.** Quem fez o merge põe o print do PR (com o "merged" no nome dela) no cartão da dupla do dia.
8. **Atualizar.** Os dois: `git switch main` · `git pull`.

## Pastas

- `legado/` · o código em JavaScript de onde cada peça parte. Não apague: ele mostra de onde vocês vieram.
- `dados/produtos.json` · a resposta da "API" de produtos. Tem defeitos de propósito.
- `src/dominio/` · as peças em TypeScript.
- `src/exemplos/` · um arquivo por peça que usa a peça com um caso normal e um caso de erro. Quem revisa roda: `node dist/exemplos/<peça>.js`.
- `docs/modelo.md` · o mapa das classes do produto. Cada dono acrescenta a sua peça.
