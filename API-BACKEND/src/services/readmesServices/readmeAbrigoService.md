# 📂 Pasta/arquivo: services/abrigo.service.ts

## Descrição:

- **abrigo.service.ts**  
  Camada de serviço responsável pela entidade `Abrigo`.  
  Estende a classe genérica `BaseService`, reutilizando os métodos padrão de CRUD e aplicando validações específicas para os campos da entidade antes das operações de criação e atualização.

## Funcionalidades herdadas do `BaseService`:

- `findAll()` → Retorna todos os abrigos com resposta padronizada.
- `findOne(id)` → Busca um abrigo por ID, com tratamento para registros inexistentes.
- `create(data)` → Cria um novo abrigo, após validações de integridade.
- `update(id, data)` → Atualiza um abrigo existente por ID com validações.
- `remove(id)` → Remove um abrigo por ID com resposta informativa.

## Validações implementadas:

- Validação de campos obrigatórios e tipo dos dados:
  - `nomeAbrigo` → Obrigatório, texto com pelo menos 2 caracteres.
  - `emailAbrigo` → Obrigatório, formato de e-mail válido.
  - `celularAbrigo` → Obrigatório, deve conter apenas dígitos e ter tamanho adequado.
  - `endereco_id` → Obrigatório, deve ser um número válido (relacionamento com entidade `Endereco`).

- As funções `validateNome`, `validateEmail` e `validateCelular` são herdadas do `BaseService` para evitar repetição de lógica entre entidades que possuem campos semelhantes.

## Observações:

- Toda lógica de negócio referente à entidade `Abrigo` deve ser concentrada neste service.
- Validações customizadas foram adicionadas para garantir a consistência dos dados.
- Este service consome o `AbrigoRepository`, que por sua vez herda do `BaseRepository`.
- Está preparado para crescimento, com possibilidade de inclusão de métodos específicos no futuro.
