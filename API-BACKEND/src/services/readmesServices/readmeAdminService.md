# 📂 Pasta/arquivo: `services/admin.service.ts`

## Descrição:

- **admin.service.ts**  
  Camada de serviço responsável pela entidade `Admin`.  
  Estende a classe genérica `BaseService`, reutilizando os métodos padrão de CRUD e aplicando **validações específicas para os campos da entidade Admin** antes das operações de criação e atualização.

## Funcionalidades herdadas do `BaseService`:

- `findAll()` → Retorna todos os admins com resposta padronizada.  
- `findOne(id)` → Busca um admin por ID, com tratamento para registros inexistentes.  
- `create(data)` → Cria um novo admin, **após validações obrigatórias**.  
- `update(id, data)` → Atualiza um admin existente por ID com **validações parciais e condicionais**.  
- `remove(id)` → Remove um admin por ID com resposta informativa.  

## Validações implementadas:

### 📌 Método `create()`: validações obrigatórias via `validateAdmin()`

- `nomeAdmin` → Obrigatório. 
- `emailAdmin` → Obrigatório, formato de e-mail válido.  
- `celularAdmin` → Obrigatório, apenas dígitos, tamanho adequado.  
- `senhaAdmin` → Obrigatório 
- `dataCadastroAdmin` → Obrigatório, deve ser uma data válida.  
- `statusAdmin` → Obrigatório, deve ser um booleano (`true` ou `false`).  
- `endereco_id` → Obrigatório, número válido (relacionamento com `Endereco`).  
- `abrigo_id` → Obrigatório, número válido (relacionamento com `Abrigo`).  

### ✏️ Método `update()`: validações parciais e condicionais

- Valida somente os campos enviados na atualização.
- Campos validados, se presentes:
  - `nomeAdmin`, `emailAdmin`, `celularAdmin`, `senhaAdmin`, `dataCadastroAdmin`, `statusAdmin`, `endereco_id`, `abrigo_id`
- Exemplo: é possível atualizar apenas o `emailAdmin` sem precisar enviar os outros campos.

## Observações:

- A função `validateAdmin()` centraliza a validação de dados obrigatórios para criação.
- As funções reutilizáveis como `validateNome`, `validateEmail`, `validateCelular`, etc., são herdadas do `BaseService`.
- Este service consome o `AdminRepository`, que herda do `BaseRepository`.
- Toda lógica de negócio específica da entidade Admin fica concentrada nesta camada.
- Está preparado para expansão futura, como adição de regras de negócio personalizadas ou integrações.
