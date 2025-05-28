# 📂 Pasta/arquivo: controllers/adotante.controller.ts

## Rotas:

- **adotante.controller.ts**  
  Controller da entidade `Adotante`.  
  Herda os métodos do `BaseController` para reaproveitamento de código.  
  Define a rota base `/adotantes`.

- GET - Página padrão (primeiros 10 registros): http://localhost:3000/adotantes  
- GET - Página 2 com 5 registros: http://localhost:3000/adotantes?page=2&limit=5  
- GET - Filtro por nomeAdotante, emailAdotante, celularAdotante: http://localhost:3000/adotantes?nomeAdotante=Maria  
- GET - Filtro por rgAdotante: http://localhost:3000/adotantes?rgAdotante=123456789  
- GET - Filtro por dataCadastroAdotante: http://localhost:3000/adotantes?dataCadastroAdotante=2024-08-01  
- GET - Filtro combinado: http://localhost:3000/adotantes?nomeAdotante=Maria&rgAdotante=123456789&page=1&limit=5  
- GET - Buscar um adotante específico por id: http://localhost:3000/adotantes/1  
- POST - Criar um novo adotante: http://localhost:3000/adotantes  
- PUT - Atualizar um adotante por id: http://localhost:3000/adotantes/1  
- DELETE - Deletar um adotante por id: http://localhost:3000/adotantes/1  

## Funcionalidades:
- Suporte à paginação dos dados retornados, conectado ao `base.repository` e `base.service`.
- Permite filtros opcionais nos seguintes campos:
  - `nomeAdotante`
  - `emailAdotante`
  - `celularAdotante`
  - `rgAdotante`
  - `dataCadastroAdotante` (formato ISO: `yyyy-mm-dd`)
