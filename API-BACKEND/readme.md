# 🐾 API - ONG Pet Lovers

API desenvolvida em **Node.js com NestJS** para gerenciamento de dados de uma ONG voltada ao cuidado e adoção de pets. Este repositório contém a estrutura backend da aplicação, com base modular, orientada a boas práticas e pronta para evoluir com persistência em banco de dados, autenticação e mais.

# 🚀 Como rodar o projeto:

- npm start
- http://localhost:3000

# 📁 Estrutura Geral da API:

- src/
- ├── config/           # Configurações gerais da aplicação (ex: banco);
- ├── auth/             # Autenticação JWT para proteção das rotas e segurança;
- ├── controllers/      # Camada que recebe e responde às requisições HTTP;
- ├── models/           # Representação das entidades da aplicação (ex: Endereco);
- ├── modules/          # Organização dos módulos da aplicação (ex: EnderecoModule);
- ├── repository/       # Comunicação com banco de dados;
- ├── services/         # Camada de lógica de negócio (ex: EnderecoService);
- ├── utils/            # Funções auxiliares;

# ✅ Funcionalidades atuais:

- ✅ Estrutura modular com NestJS;
- ✅ Comunicação com banco SQLServer realizada com sucesso;
- ✅ Entidades implementadas: Endereco, Abrigo, Admin, Adotante, Pet;
- ✅ CRUD genérico baseado em BaseController, BaseService, BaseRepository;
- ✅ Paginação dos dados retornados podento ser utilizada por qualquer entidade;
- ✅ Busca por filtros específicos;
- ✅ Validações gerais e específicas criadas;
- ✅ Tratamento de Erros para as requisições;
- ✅ Segurança dos dados com senhas criptografadas, implementando hash com bcrypt;
- ✅ Autenticação com JWT realizada;
- ✅ Reutilização de códigos;
- ✅ Separando responsabilidades;
- ✅ Códigos e pastas com boa documentação;
- ✅ Testes realizados no Postman;
- ✅ Servidor rodando com sucesso;

# 🛠 Tecnologias utilizadas:

- Node.js ("versão: v22.15.0")
- NestJS (versão: "11.0.7")
- Typescript (versão: "^5.7.3")
- TypeORM: (versão: "^0.3.23")

# 📌 Próximos passos:
- 🌐 CORS habilitado: Necessário para frontend, senão, o navegador bloqueia as requisições
- 🔐 Documentação com (Swagger) na API, /api; Facilita integração com frontend e documentação da API para outros devs;
- 📦 Versionamento de API (v1, v2...). Permite evoluir a API sem quebrar versões existentes;

# 📄 Licença:

Projeto próprio, desenvolvido de ponta a ponta unicamente por mim, josé jhonata.

