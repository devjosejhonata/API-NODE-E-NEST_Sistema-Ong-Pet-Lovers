# 📂 Pasta/arquivo: `services/adotante.service.ts`

## Descrição:

- **adotante.service.ts**  
  Camada de serviço responsável pela entidade `Adotante`.  
  Estende a classe genérica `BaseService`, reutilizando os métodos padrão de CRUD e aplicando **validações específicas para os campos da entidade Adotante** antes das operações de criação e atualização.

## Funcionalidades herdadas do `BaseService`:

- `findAll()` → Retorna todos os adotantes com resposta padronizada.  
- `findOne(id)` → Busca um adotante por ID, com tratamento para registros inexistentes.  
- `create(data)` → Cria um novo adotante, **após validações obrigatórias**.  
- `update(id, data)` → Atualiza um adotante existente por ID com **validações parciais e condicionais**.  
- `remove(id)` → Remove um adotante por ID com resposta informativa.  

## Validações implementadas:

### 📌 Método `create()`: validações obrigatórias via `validateAdotante()`

- `nomeAdotante` → Obrigatório.  
- `emailAdotante` → Obrigatório, formato de e-mail válido.  
- `celularAdotante` → Obrigatório, apenas dígitos, tamanho adequado.  
- `senhaAdotante` → Obrigatório.  
- `rgAdotante` → Obrigatório, apenas números e letras, tamanho mínimo de 5 caracteres.  
- `dataCadastroAdotante` → Obrigatório, deve ser uma data válida.  
- `endereco_id` → Obrigatório, número válido (relacionamento com `Endereco`).  

### ✏️ Método `update()`: validações parciais e condicionais

- Valida somente os campos enviados na atualização.  
- Campos validados, se presentes:  
  - `nomeAdotante`, `emailAdotante`, `celularAdotante`, `senhaAdotante`, `rgAdotante`, `dataCadastroAdotante`, `endereco_id`  
- Exemplo: é possível atualizar apenas o `celularAdotante` sem precisar enviar os outros campos.

## Observações:

- A função `validateAdotante()` centraliza a validação de dados obrigatórios para criação.  
- As funções reutilizáveis como `validateNome`, `validateEmail`, `validateCelular`, `validateSenha`, `validateDataCadastro` são herdadas do `BaseService`.  
- A validação de `rgAdotante` é específica e feita localmente no `AdotanteService`.  
- Este service consome o `AdotanteRepository`, que herda do `BaseRepository`.  
- Toda lógica de negócio específica da entidade Adotante fica concentrada nesta camada.  
- Está preparado para futuras regras personalizadas, como filtros por RG, histórico de adoção, etc.
