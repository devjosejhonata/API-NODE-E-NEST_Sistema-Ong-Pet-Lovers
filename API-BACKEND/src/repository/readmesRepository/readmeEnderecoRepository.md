# 📂 Pasta/arquivo: repository/endereco.repository.ts

## Descrição:

- **endereco.repository.ts**  
  Este é o repositório específico da entidade `Endereco`.  
  Ele estende a classe genérica `BaseRepository`, herdando os métodos padrão de acesso a dados como `findAll`, `findById`, `create`, `update` e `delete`.

## Vantagens:

- Elimina duplicação de código ao herdar métodos comuns do `BaseRepository`.
- Facilita a adição de métodos personalizados no futuro, mantendo a estrutura modular.
- Organiza o acesso a dados da entidade `Endereco` de forma clara e reutilizável.

## Observações:

- Esse repositório está pronto para crescer com métodos específicos, como buscas filtradas ou relacionamentos personalizados.
