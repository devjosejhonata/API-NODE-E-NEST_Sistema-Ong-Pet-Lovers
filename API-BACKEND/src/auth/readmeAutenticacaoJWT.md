
## FUNCIONALIDADES DA AUTENTICAÇÃO JWT: 

- Get e Get por id para Pets, Abrigos e Enderecos: Qualquer usuário na web ou aplicativo poderá buscar um Pet para adoção ou saber os abrigos disponíveis;
- Get e Get por id para Adotantes e Admins: Somente admins logados e autenticados poderão buscar todos e buscar por id, os Adotantes e Admins, por segurança de informações;
- Post, Put e Delete para Pets, Abrigos, Admins, Adotantes e Enderecos: Somente admins logados poderão criar, editar ou remover um pet, abrigo, admin, adotante ou endereco. 

## ✅ Resumo da estratégia JWT no sistema ONG Pet Lovers:

**Visíveis por qualquer usuário da web/aplicativo:**

- GET /pets
- GET /pets/:id
- GET /abrigos
- GET /abrigos/:id
- GET /enderecos
- GET /enderecos/:id

## 🔐 ROTAS PROTEGIDAS (somente admin logado)

**Acessadas (com token JWT + papel admin):**

- POST, PUT, DELETE de:
- /pets
- /abrigos
- /admins
- /adotantes
- /enderecos

GET e GET/:id de:

- /admins
- /adotantes

## Arquivos do src/auth:

- src/auth/
- │
- ├── auth.module.ts
- ├── auth.service.ts
- ├── auth.controller.ts
- ├── jwt.strategy.ts
- ├── jwt.auth.guard.ts

## ✅ Estratégia:

- *base.controller.ts no src/controllers*:
- Contém a proteção das rotas;

- *auth.controller.ts*:
- Contém a rota para login: /auth/login;

- *auth.module.ts*:
- Módulo de autenticação da aplicação.
- Importa o módulo JWT e o módulo Admin, e registra os providers e controllers necessários.

- *auth.service.ts*:
- Contém os serviços de autenticação, responsável por validações e gerar o token JWT para o Admin.

- *jwt.auth.guards.ts*:
- Guardião de rotas que utiliza a estratégia JWT para proteger endpoints.
- Deve ser aplicado via decorator @UseGuards() nas rotas desejadas.

- *jwt.strategy.ts*:
- Estratégia de autenticação JWT que valida o token enviado nas requisições protegidas.
- Extrai o payload do token e o injeta no `Request.user`.

## ✨ Sobrescrita:

- 🔒 Na Proteção de Rotas para **admins e adotantes**: 
- Arquivos: *admin.controller.ts, adotante.controller.ts*;
- Sobrescreve os GET e GET/:id apenas nesses dois controllers para protegê-los.
- Por motivos de segurança, protegendo os dados.

- 🔓 Para os controllers de Pets, Abrigos e Enderecos:
- Não sobrescreve nada – os GETs continuam públicos (ótimo para o portal externo e aplicativo).

## Para login, requisição no Postman:

- 🔐 Inserir o **email cadastrado** no emailAdmin de Admin;
- 🔐 Inserir a **senha original**, que é os dados usados na hora do POST de cadastro do Admin, pois como a senha está sendo salva criptografada com hash de bcrypt, lá no banco de dados sql server, então o código vai comparar a senha original informada no login, com a hash no banco, e gerar o access_token para autenticação. 

## Observação: 

- Autenticação JWT por enquanto implementado somente para Admin, posteriormente será para outras entidades.