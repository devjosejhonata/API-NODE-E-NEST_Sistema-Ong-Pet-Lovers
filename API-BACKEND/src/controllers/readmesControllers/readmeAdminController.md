# 📂 Pasta/arquivo: controllers/admin.controller.ts

## Rotas:

- **admin.controller.ts**  
  Controller da entidade `Admin`.  
  Herda os métodos do `BaseController` para reaproveitamento de código.  
  Define a rota base `/admins`.

- GET - Página padrão (primeiros 10 registros): http://localhost:3000/admins  
- GET - Página 2 com 5 registros: http://localhost:3000/admins?page=2&limit=5  
- GET - Filtro por nomeAdmin, emailAdmin, celularAdmin: http://localhost:3000/admins?nomeAdmin=João  
- GET - Filtro por statusAdmin (true/false): http://localhost:3000/admins?statusAdmin=true  
- GET - Filtro por dataCadastroAdmin: http://localhost:3000/admins?dataCadastroAdmin=2024-08-01  
- GET - Filtro combinado: http://localhost:3000/admins?nomeAdmin=João&statusAdmin=true&page=1&limit=5  
- GET - Buscar um admin específico por id: http://localhost:3000/admins/1  
- POST - Criar um novo admin: http://localhost:3000/admins  
- PUT - Atualizar um admin por id: http://localhost:3000/admins/1  
- DELETE - Deletar um admin por id: http://localhost:3000/admins/1  

## Funcionalidades:
- Permite filtros opcionais nos seguintes campos:
  - `nomeAdmin`
  - `emailAdmin`
  - `celularAdmin`
  - `statusAdmin` (booleano: `true` ou `false`)
  - `dataCadastroAdmin` (formato ISO: `yyyy-mm-dd`)
