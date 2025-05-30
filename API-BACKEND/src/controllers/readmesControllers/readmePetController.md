# 📂 Pasta/arquivo: controllers/pet.controller.ts

## Rotas:

- **pet.controller.ts**  
  Controller da entidade `Pet`.  
  Herda os métodos do `BaseController` para reaproveitamento de código.  
  Define a rota base `/pets`.

- GET - Página padrão (primeiros 10 registros): http://localhost:3000/pets  
- GET - Página 2 com 5 registros: http://localhost:3000/pets?page=2&limit=5  
- GET - Filtro por nomePet, raca, porte, statusAdocao, identidadePet: 
- http://localhost:3000/pets?nomePet=Rex
- http://localhost:3000/pets?raca=poodle
- http://localhost:3000/pets?porte=pequeno
- http://localhost:3000/pets?statusAdocao=disponivel
- http://localhost:3000/pets?identidadePet=chip12345
- GET - Filtro por dataNascimentoPet ou dataAdocao: http://localhost:3000/pets?dataNascimentoPet=2023-01-01  
- GET - Filtros combinados: GET http://localhost:3000/pets?porte=pequeno&statusAdocao=disponivel&page=1&limit=5 
- GET - Buscar um pet específico por id: http://localhost:3000/pets/1  
- POST - Criar um novo pet: http://localhost:3000/pets  
- PUT - Atualizar um pet por id: http://localhost:3000/pets/1  
- DELETE - Deletar um pet por id: http://localhost:3000/pets/1  

## Funcionalidades:
- Permite filtros opcionais nos seguintes campos:
  - `nomePet`
  - `raca`
  - `porte` (ex: pequeno, médio, grande)
  - `statusAdocao` (ex: disponivel, adotado)
  - `dataNascimentoPet` (formato ISO: `yyyy-mm-dd`)
  - `dataAdocao` (formato ISO: `yyyy-mm-dd`)
