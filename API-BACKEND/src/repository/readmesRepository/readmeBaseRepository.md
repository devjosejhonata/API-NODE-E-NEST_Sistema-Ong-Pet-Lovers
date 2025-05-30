# 📂 Pasta/arquivo: repository/base.repository.ts

A pasta `repository` contém os arquivos responsáveis por lidar com a comunicação entre as entidades (models) e o banco de dados via TypeORM.

## Arquivo:

- **base.repository.ts**  
  Classe genérica de repositório que implementa os métodos básicos de CRUD (`findAll`, `findById`, `create`, `update`, `delete`).  
  É utilizada como base para os repositórios específicos, reduzindo repetição de código.

## Funcionalidades:

- Comunicação com o banco de dados utilizando o TypeORM;
- Validação e retorno dos dados definidos por entidade com relacionamentos diretos e relacionamentos aninhados.
- Filtragem de dados para retorno;
- Paginação;

### 🔄 Paginação:
- Paginação implementada diretamente no método `findAll`, reutilizável por todas as entidades que estendem `BaseRepository`;
- Também integrada ao `base.service.ts`, permitindo uso consistente nos controllers;
- A consulta é montada via `QueryBuilder`, retornando:
- Os registros conforme a página e limite definidos;
- O total de registros (para cálculo de páginas no frontend).

### 🔍 Filtros avançados:
- O método `findAll` oferece suporte a filtros por:
- Campos de nome (usando `REPLACE`, `COLLATE` e `LIKE`);
- Campos de data (com filtragem por intervalo de dia completo), ignorando hora;
- Campos padrão (ex: id, email, etc.).
- Permite buscas avançadas graças ao uso do `QueryBuilder` do TypeORM.

## Observações:

- Este repositório genérico deve ser **estendido** pelos repositórios de cada entidade (como `AdotanteRepository`, `AdminRepository`, etc.);
- Proporciona:
- Reutilização de lógica comum (filtros, paginação, joins);
- Padronização do acesso a dados;
- Melhor organização do projeto.

### 📌 Alternativa mais simples (com trade-offs), para filtragem e relacionamentos:

- **Caso deseje futuramente reduzir a complexidade de código no `BaseRepository`, considere**:
- Remover o uso do `QueryBuilder`;
- Simplificar a lógica de joins e filtros;
- Utilizar `{ eager: true }` nos relacionamentos nos modelos;
- **Impacto**:
- Código mais enxuto;
- Menor controle sobre joins e filtros personalizados;
- Perda de flexibilidade para buscas mais complexas.

