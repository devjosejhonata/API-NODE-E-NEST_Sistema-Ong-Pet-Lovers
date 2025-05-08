- Para roda a API: npm start, rodando na porta 3000

** Estrutura Geral (simplificada)

src/
├── config/
│   └── database.config.ts     ← configurações de conexão com o banco
    Este arquivo define como a aplicação se conecta ao banco de dados (no caso desse projeto o SQL Server). Nele se configura o ORM (como TypeORM ou Sequelize) ou o driver puro do SQL Server.

├── models/
│   └── endereco.model.ts      ← estrutura/entidade Endereco
    Armazenar modelos de dados, ou seja, as representações das entidades no banco de dados. Aqui, sera definido as classes que representam as entidades da aplicação (por exemplo, Adotante, Pet, Abrigo, Endereco, Admin.).

├── services/
│   └── endereco.service.ts    ← lógica de negócio e acesso ao banco
    O service é onde escreve a lógica para acessar o banco. Neste ponto, ele chama o repositório ou ORM para buscar, salvar ou atualizar dados.
    
├── controllers/
│   └── endereco.controller.ts ← recebe as requisições e chama o service
