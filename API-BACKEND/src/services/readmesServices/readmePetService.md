# 📂 Pasta/arquivo: `services/pet.service.ts`

## Descrição:

- **pet.service.ts**  
  Camada de serviço responsável pela entidade `Pet`.  
  Estende a classe genérica `BaseService`, reutilizando os métodos padrão de CRUD e aplicando **validações específicas para os campos da entidade Pet** antes das operações de criação e atualização.

## Funcionalidades herdadas do `BaseService`:

- `findAll()` → Retorna todos os pets com resposta padronizada.  
- `findOne(id)` → Busca um pet por ID, com tratamento para registros inexistentes.  
- `create(data)` → Cria um novo pet, **após validações obrigatórias**.  
- `update(id, data)` → Atualiza um pet existente por ID com **validações parciais e condicionais**.  
- `remove(id)` → Remove um pet por ID com resposta informativa.  

## Validações implementadas:

### 📌 Método `create()`: validações obrigatórias via `validatePet()`

- `nomePet` → Obrigatório.  
- `raca` → Obrigatório, máximo de 100 caracteres.  
- `porte` → Obrigatório, deve ser pequeno, médio ou grande.  
- `dataNascimentoPet` → Obrigatório, deve ser uma data válida.  
- `statusAdocao` → Obrigatório, deve ser `"disponivel"` ou `"adotado"`, **sem considerar maiúsculas/minúsculas**.  
- `identidadePet` → Obrigatório, string com até 50 caracteres.  
- `descricaoPet` → Obrigatório, string com até 255 caracteres.  
- `fotoPet` → Opcional, se fornecido deve ser uma URL iniciando com "http".  
- `dataCadastroPet` → Obrigatório, deve ser uma data válida.  
- `dataAdocao` → Opcional, se fornecido deve ser uma data válida.  
- `abrigo_id` → Obrigatório, número válido (relacionamento com `Abrigo`).  
- `admin_id` → Obrigatório, número válido (relacionamento com `Admin`).  
- `adotante_id` → Opcional, número válido (relacionamento com `Adotante`).  

### ✏️ Método `update()`: validações parciais e condicionais

- Valida somente os campos enviados na atualização.  
- Campos validados, se presentes:  
  - `nomePet`, `raca`, `porte`, `dataNascimentoPet`, `statusAdocao`, `identidadePet`, `descricaoPet`, `fotoPet`, `dataCadastroPet`, `dataAdocao`, `abrigo_id`, `admin_id`, `adotante_id`  
- Exemplo: é possível atualizar apenas o `statusAdocao` sem precisar enviar os outros campos.

## Observações:

- A função `validatePet()` centraliza a validação de dados obrigatórios para criação.  
- As funções reutilizáveis como `validateNome`, `validateDataNascimento`, `validateDataCadastro` são herdadas do `BaseService`.  
- A validação de campos como `porte`, `statusAdocao` e `fotoPet` são específicas e feitas localmente no `PetService`.  
- Este service consome o `PetRepository`, que herda do `BaseRepository`.  
- Toda lógica de negócio específica da entidade Pet fica concentrada nesta camada.  
- Está preparado para futuras regras adicionais, como filtro por porte, status de adoção, idade do pet, etc.
