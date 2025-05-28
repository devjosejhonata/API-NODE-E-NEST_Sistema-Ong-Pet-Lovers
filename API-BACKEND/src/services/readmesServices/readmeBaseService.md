
# 📂 Pasta: services

Esta pasta contém a lógica de negócio das entidades do sistema, intermediando o controller e o acesso ao banco de dados. O service é onde escreve a lógica para acessar o banco. Neste ponto, ele chama o repositório ou ORM para buscar, salvar ou atualizar dados. Cada serviço deve ser responsável por uma entidade da aplicação, centralizando as regras de negócio e as operações relacionadas as essas entidades.

## Arquivo base:

- **base.service.ts**  
  Service genérico, contendo uma classe abstrata com métodos padrão reutilizáveis (CRUD) para outras entidades.

# Funcionalidades:
- Esse base.service contém validadões de statusCode, HttpStatus, BAD_REQUEST.
- O arquivo base.service contém validações para serem reaproveitadas por outras entidades, para campos semelhantes de cada entidade, como nomeAbrigo, nomeAdmin, emailAbrigo, emailAdmin etc;

- **Paginação**:
- Paginação dos dados na API com filtros opcionais, metodo podendo ser reutilizado por outras entidades, implementado tambem em base.repository.
- repository: | Montar e executar consulta no banco com filtros e paginação, retornar dados + total.                                                 
- service: | Receber query da controller, extrair e validar parâmetros, chamar repository, montar resposta padrão com status, mensagens e paginação.
- Paginação implementada dentro de findAll.

## Observações:
- Os services devem ser responsáveis apenas pela lógica da aplicação, mantendo o controller mais limpo.
- As entidades futuras devem seguir o mesmo padrão.
