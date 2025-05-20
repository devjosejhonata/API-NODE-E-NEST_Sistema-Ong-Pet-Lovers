# 📂 Pasta/arquivo: controllers/endereco.controller.ts

## Rotas:

- **endereco.controller.ts**  
  Controller da entidade `Endereco`.  
  Herda os métodos do `BaseController` para reaproveitamento de codigo.
  Define a rota base `/enderecos`.

- GET - Página padrão (primeiros 10 registros): http://localhost:3000/enderecos
- GET - Página 2 com 5 registros: http://localhost:3000/enderecos?page=2&limit=5
- GET - Rota por filtro, estado, cidade, bairro: http://localhost:3000/enderecos?estado=SP
- GET - Filtro combinado: http://localhost:3000/enderecos?estado=SP&cidade=São Paulo&page=1&limit=3
- GET - Buscar um endereço especifico por id: http://localhost:3000/enderecos/1
- POST - Postar um novo endereço: http://localhost:3000/enderecos
- PUT - Atualizar um endereço por id: http://localhost:3000/enderecos/19
- DELETE - Deletar um endereço por id: http://localhost:3000/enderecos/19


## Funcionalidades:
- Contém paginação dos dados retornados, ligada a base.repository e base.service;