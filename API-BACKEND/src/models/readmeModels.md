
# 📂 Pasta: models

A pasta models/ tem como objetivo armazenar modelos de dados, ou seja, as representações das entidades no banco de dados. Aqui, sera definido as classes que representam as entidades da aplicação (por exemplo, Adotante, Pet, Abrigo, Endereco, Admin.).

Modelos podem ser representados como entidades (se usar TypeORM), e cada modelo pode ter propriedades que correspondem às colunas da tabela no banco de dados.
Se não for usar um ORM, pode simplesmente criar uma classe representando a entidade.

## Arquivos atuais:

- **endereco.model.ts**  
  Modelo da entidade `Endereco`. Define os atributos da tabela `enderecos` utilizados na aplicação.

## Observações:
- Cada modelo deve refletir a estrutura da respectiva tabela no banco de dados.
- Os modelos são utilizados na comunicação entre o controller, service e persistência.

