# 📂 Pasta/arquivo: controllers/abrigo.controller.ts

## Rotas:

- **abrigo.controller.ts**  
  Controller da entidade `Abrigo`.  
  Herda os métodos do `BaseController` para reaproveitamento de código.  
  Define a rota base `/abrigos`.

- GET - Página padrão (primeiros 10 registros): http://localhost:3000/abrigos
- GET - Página 2 com 5 registros: http://localhost:3000/abrigos?page=2&limit=5
- GET - Rota por filtro, nomeAbrigo, emailAbrigo, celularAbrigo: http://localhost:3000/abrigos?nomeAbrigo=Lar Feliz
- GET - Filtro combinado: http://localhost:3000/abrigos?nomeAbrigo=Lar Feliz&emailAbrigo=lar@feliz.com&page=1&limit=3
- GET - Buscar um abrigo específico por id: http://localhost:3000/abrigos/1
- POST - Postar um novo abrigo: http://localhost:3000/abrigos
- PUT - Atualizar um abrigo por id: http://localhost:3000/abrigos/19
- DELETE - Deletar um abrigo por id: http://localhost:3000/abrigos/19

## Funcionalidades:
- Permite filtros opcionais nos campos `nomeAbrigo`, `emailAbrigo` e `celularAbrigo`.
