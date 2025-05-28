# 📂 Pasta: models

A pasta `models/` tem como objetivo armazenar modelos de dados, ou seja, as representações das entidades no banco de dados. Aqui são definidas as classes que representam as entidades da aplicação (`Endereco`, `Abrigo`, `Admin`, `Adotante`, `Pet`).

## Arquivos atuais:

- **endereco.model.ts**: Modelo da entidade `Endereco`. Define os atributos da tabela `enderecos` utilizados na aplicação.
- **abrigo.model.ts**: Modelo da entidade `Abrigo`. Define os atributos da tabela `abrigo`, incluindo relacionamento 1:1 com `Endereco` e 1:N com `Admin` e `Pet`.
- **admin.model.ts**: Modelo da entidade `Admin`. Define os atributos da tabela `admin`, incluindo relacionamentos com `Endereco` (1:1) e com `Abrigo` (N:1).
- **adotante.model.ts**: Modelo da entidade `Adotante`. Define os atributos da tabela `adotante`, incluindo relacionamento 1:1 com `Endereco`.

## Observações:

- Cada modelo deve refletir fielmente a estrutura da respectiva tabela no banco de dados.
- Os modelos são utilizados na comunicação entre os controllers, services e repositórios.
- Relacionamentos entre entidades são definidos usando os decoradores do TypeORM (`@OneToOne`, `@ManyToOne`, etc).
