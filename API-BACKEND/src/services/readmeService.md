
# 📂 Pasta: services

Esta pasta contém a lógica de negócio das entidades do sistema, intermediando o controller e o acesso ao banco de dados. O service é onde escreve a lógica para acessar o banco. Neste ponto, ele chama o repositório ou ORM para buscar, salvar ou atualizar dados. Cada serviço deve ser responsável por uma entidade da aplicação, centralizando as regras de negócio e as operações relacionadas as essas entidades.

- O service é o intermediário entre o controller e o banco. Ele acessa diretamente o banco via ORM (como TypeORM) ou drivers SQL. O arquivo da config, localizado na pasta src/config, apenas prepara a conexão, que o NestJS usa internamente.

## Arquivos atuais:

- **base.service.ts**  
  Service genérico com métodos padrão reutilizáveis (CRUD) para outras entidades.

- **endereco.service.ts**  
  Implementa o serviço da entidade `Endereco`, herdando os métodos do `BaseService`.

## Observações:
- Os services devem ser responsáveis apenas pela lógica da aplicação, mantendo o controller mais limpo.
- As entidades futuras devem seguir o mesmo padrão.
