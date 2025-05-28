# 📂 Pasta/arquivo: controllers/base.controller.ts

A pasta controllers contém os arquivos responsáveis por lidar com as requisições HTTP da aplicação. Os controllers fazem a ponte entre as rotas e os serviços (`services`), controlando a entrada e saída de dados.

## Arquivos atuais:

- **base.controller.ts**  
  Controlador genérico, contendo uma classe abstrata que define os métodos CRUD padrão (`findAll`, `findOne`, `create`, `update`, `remove`).  
  Deve ser estendido pelos controllers específicos de cada entidade. Novos controllers devem estender o `BaseController` para reaproveitamento de código.

## Observações:
- Métodos adicionais específicos podem ser adicionados diretamente no controller de cada entidade.
- findAll ajustado para receber os parâmetros via query para tratamento de filtros opcionais de busca.