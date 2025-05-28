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
- Paginação dos dados na API com filtros opcionais, metodo podendo ser reutilizado por outras entidades;
- repository: | Montar e executar consulta no banco com filtros e paginação, retornar dados + total.                                                    
- service: | Receber query da controller, extrair e validar parâmetros, chamar repository, montar resposta padrão com status, mensagens e paginação.
- Paginação implementada dentro de findAll.

## Observações:

- Deve ser estendida pelos repositórios específicos de cada entidade.
- Promove organização, reutilização e padronização no acesso a dados.

