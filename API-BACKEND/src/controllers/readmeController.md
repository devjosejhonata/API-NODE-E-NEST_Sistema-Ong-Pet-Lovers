# 📂 Pasta: controllers

Esta pasta contém os arquivos responsáveis por lidar com as requisições HTTP da aplicação. Os controllers fazem a ponte entre as rotas e os serviços (`services`), controlando a entrada e saída de dados.

## Arquivos atuais:

- **base.controller.ts**  
  Controlador genérico que define os métodos CRUD padrão (`findAll`, `findOne`, `create`, `update`, `remove`).  
  Deve ser estendido pelos controllers específicos de cada entidade.

- **endereco.controller.ts**  
  Controller da entidade `Endereco`.  
  Herda os métodos do `BaseController` e define a rota base `/enderecos`.

## Observações:
- Novos controllers devem estender o `BaseController` para reaproveitamento de código.
- Métodos adicionais específicos podem ser adicionados diretamente no controller da entidade.

---
