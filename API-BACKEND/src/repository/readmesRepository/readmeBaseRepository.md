# 📂 Pasta/arquivo: repository/base.repository.ts

A pasta `repository` contém os arquivos responsáveis por lidar com a comunicação entre as entidades (models) e o banco de dados via TypeORM.

## Arquivo:

- **base.repository.ts**  
  Classe genérica de repositório que implementa os métodos básicos de CRUD (`findAll`, `findById`, `create`, `update`, `delete`).  
  É utilizada como base para os repositórios específicos, reduzindo repetição de código.

## Funcionalidades:

- Comunicação com banco de dados;
- validação para retorno dos dados de relacionamentos.

- **Paginação**:
- Paginação dos dados na API, metodo podendo ser reutilizado por outras entidades, implementado também em base.service.ts;
- repository: | Montar e executar consulta no banco, retornar dados + total.                                                    
- Paginação implementada dentro de findAll.

- **Busca por filtros**:
- Código ajustado em findAll para busca por filtros como Data e Nome;
- Implementado aqui em base.repository e base.service;
- Estou utilizando o QueryBuilder para suporte a filtros mais avançados como collation, REPLACE, ou LIKE com transformação. 

## Observações:

- Deve ser estendida pelos repositórios específicos de cada entidade.
- Promove organização, reutilização e padronização no acesso a dados.

