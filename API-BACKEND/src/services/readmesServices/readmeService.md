
# 📂 Pasta: services

Esta pasta contém a lógica de negócio das entidades do sistema, intermediando o controller e o acesso ao banco de dados. O service é onde escreve a lógica para acessar o banco. Neste ponto, ele chama o repositório ou ORM para buscar, salvar ou atualizar dados. Cada serviço deve ser responsável por uma entidade da aplicação, centralizando as regras de negócio e as operações relacionadas as essas entidades.

## Arquivo base:

- **base.service.ts**  
  Service genérico, contendo uma classe abstrata com métodos padrão reutilizáveis (CRUD) para outras entidades.

## Observações:
- Os services devem ser responsáveis apenas pela lógica da aplicação, mantendo o controller mais limpo.
- As entidades futuras devem seguir o mesmo padrão.
