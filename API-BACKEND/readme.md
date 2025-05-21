# 🐾 API - ONG Pet Lovers

API desenvolvida em **Node.js com NestJS** para gerenciamento de dados de uma ONG voltada ao cuidado e adoção de pets. Este repositório contém a estrutura backend da aplicação, com base modular, orientada a boas práticas e pronta para evoluir com persistência em banco de dados, autenticação e mais.

# 🚀 Como rodar o projeto:

- npm start
- http://localhost:3000

# 📁 Estrutura Geral da API:

- src/
- ├── config/           # Configurações gerais da aplicação (ex: banco)
- ├── controllers/      # Camada que recebe e responde às requisições HTTP
- ├── models/           # Representação das entidades da aplicação (ex: Endereco)
- ├── modules/          # Organização dos módulos da aplicação (ex: EnderecoModule)
- ├── repository/       # Comunicação com banco de dados
- ├── services/         # Camada de lógica de negócio (ex: EnderecoService)
- ├── utils/            # Funções auxiliares

# ✅ Funcionalidades atuais:

- ✅ Estrutura modular com NestJS
- ✅ CRUD genérico baseado em BaseController e BaseService
- ✅ Paginação dos dados retornados podento ser utilizada por qualquer entidade, implementado em base.repository e base.service e modificando nos controllers de entidades que for implementada.
- ✅ Entidades implementadas: Endereco
- ✅ Reutilização de lógica com herança de classes
- ✅ Servidor configurado para rodar na porta 3000

# 🛠 Tecnologias utilizadas:

- Node.js ("versão: v22.15.0")
- NestJS (versão: "11.0.7")
- Typescript (versão: "^5.7.3")
- TypeORM: (versão: "^0.3.23")

# 📌 Próximos passos:
- ➕ Novas entidades (Adotante, Pet, Adoção, etc.)
- 🔐 Autenticação (JWT)
- 📦 Versionamento de API (v1, v2...)

# 📄 Licença:

Projeto próprio, desenvolvido de ponta a ponta unicamente por mim, josé jhonata.

