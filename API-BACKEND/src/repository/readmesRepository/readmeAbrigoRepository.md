# 📂 Pasta/arquivo: repository/abrigo.repository.ts

## Descrição:

- **abrigo.repository.ts**  
  Este é o repositório específico da entidade `Abrigo`.  
  Ele estende a classe genérica `BaseRepository`, herdando os métodos padrão de acesso a dados como `findAll`, `findById`, `create`, `update` e `delete`.

## Vantagens:

- Elimina duplicação de código ao herdar métodos comuns do `BaseRepository`.
- Facilita a adição de métodos personalizados no futuro, mantendo a estrutura modular.
- Organiza o acesso a dados da entidade `Abrigo` de forma clara e reutilizável.

## Observações:

- Esse repositório está pronto para crescer com métodos específicos da entidade `Abrigo`, como buscas por nome, email ou relacionamento com pets e administradores.
