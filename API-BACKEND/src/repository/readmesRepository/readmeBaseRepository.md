# 📂 Pasta/arquivo: repository/base.repository.ts

A pasta `repository` contém os arquivos responsáveis por lidar com a comunicação entre as entidades (models) e o banco de dados via TypeORM.

## Arquivo:

- **base.repository.ts**  
  Classe genérica de repositório que implementa os métodos básicos de CRUD (`findAll`, `findById`, `create`, `update`, `delete`).  
  É utilizada como base para os repositórios específicos, reduzindo repetição de código.

## Observações:

- Deve ser estendida pelos repositórios específicos de cada entidade.
- Promove organização, reutilização e padronização no acesso a dados.
