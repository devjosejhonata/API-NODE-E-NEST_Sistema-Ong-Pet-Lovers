# 🐾 API - ONG Pet Lovers

API desenvolvida em **Node.js com NestJS** para gerenciamento de dados de uma ONG voltada ao cuidado e adoção de pets. Este repositório contém a estrutura backend da aplicação, com base modular, orientada a boas práticas e pronta para evoluir com novas funcionalidades, integrada com banco de dados e frontend.

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

# 📦 Funcionalidades atuais:

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
- ✅ CORS habilitado: Necessário para frontend, senão, o navegador bloqueia as requisições;
- ✅ Documentação Swagger na API, através da rota /api;
- ✅ Códigos e pastas com boa documentação;
- ✅ Seguindo princípios de Reutilização de códigos;
- ✅ Seguindo princípios de Separando responsabilidades;
- ✅ Testes realizados no Postman;
- ✅ Servidor rodando com sucesso;

# 🛠 Tecnologias utilizadas:

- Node.js ("versão: v22.15.0")
- NestJS (versão: "11.0.7")
- Typescript (versão: "^5.7.3")
- TypeORM: (versão: "^0.3.23")

# 🚧 Próximos passos:
- Futuramente, quando necessitar, implementar novas funcionalidades ou alterar regras existentes... Acrescentei um readme sobre versionamentos para esse projeto, dentro da pasta utils.
- Futuramente, quando necessitar, criar o Versionamento de API (v1, v2...). Permite evoluir a API sem quebrar versões existentes;

## 📌 Observações:

- [x] Cada pasta da API contém readmes específicos, para melhor documentar o projeto e entendimento de toda arquitetura e funcionalidades;
- [x] A API conta com comentários em todos os arquivos, para melhor documentar, entendimento e manutenção futura;
- [x] A API também conta com documentação Swagger, através da rota /api.
- [x] Rodar o projeto com o comando npm start no servidor http://localhost:3000;
- [x] Projeto próprio, desenvolvido de ponta a ponta unicamente por mim, dev josé jhonata.

# 📫 Contato:

- 💼 LinkedIn: https://www.linkedin.com/in/josejhonata/
- 📧 Email: contatojosejhonata@gmail.com

![Img API Pronta - img 01](https://github.com/user-attachments/assets/e8b7a4d3-9e78-4a77-84e9-ff12eed7c5e9)
![Img API Pronta - img 02](https://github.com/user-attachments/assets/96382de0-1a44-486e-95f0-134c54a4ce99)
![Img API Pronta - img 03](https://github.com/user-attachments/assets/9d7a8ce2-4f82-45aa-8ba6-66049c317581)
![Img API Pronta - img 04](https://github.com/user-attachments/assets/82f31607-2285-4b7d-916a-a70f4141f6e0)
![Img API Pronta - img 05](https://github.com/user-attachments/assets/3ec6ae92-61a8-48ed-be5e-d214acd2e4bf)
![Img API Pronta - img 06](https://github.com/user-attachments/assets/2545e096-b97f-4c04-9081-10f368df25d3)
![Img API Pronta - img 07](https://github.com/user-attachments/assets/760c7d93-a8b3-4a65-9936-13acf7dc3df9)
![Img API Pronta - img 08](https://github.com/user-attachments/assets/4af667f1-8ecd-40fe-95e4-440b3a7dfc40)
![Img API Pronta - img 09](https://github.com/user-attachments/assets/ec8c3b80-1d50-442d-a019-f01ba21f9634)
![Img API Pronta - img 10](https://github.com/user-attachments/assets/45bed408-bf29-42a6-a48b-588efff64f40)
![Img API Pronta - img 11](https://github.com/user-attachments/assets/57497cd8-3a7a-435a-8e79-d9da3f66bc41)
![Img API Pronta - img 12](https://github.com/user-attachments/assets/11d0f301-a1ff-44f8-8006-b2a2cdb1fd47)
