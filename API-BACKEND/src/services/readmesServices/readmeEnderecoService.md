# 📂 Pasta/arquivo: services/endereco.service.ts

## Descrição:

- **endereco.service.ts**  
  Camada de serviço responsável pela entidade `Endereco`.  
  Estende a classe genérica `BaseService`, reutilizando os métodos padrão de CRUD e adicionando uma camada de resposta padronizada com mensagens e status HTTP.

## Funcionalidades herdadas do `BaseService`:

- `findAll()` → Retorna todos os endereços com mensagem e status.
- `findOne(id)` → Busca um endereço por ID, com tratamento para não encontrado.
- `create(data)` → Cria um novo endereço com resposta padronizada.
- `update(id, data)` → Atualiza um endereço por ID com verificação de existência.
- `remove(id)` → Remove um endereço por ID com retorno informativo.

## Observações:

- Toda a lógica de negócio relacionada a `Endereco` deve ser implementada aqui.
- Métodos personalizados podem ser adicionados conforme a necessidade da entidade.
- Este service consome o `EnderecoRepository`, que herda do `BaseRepository`.
