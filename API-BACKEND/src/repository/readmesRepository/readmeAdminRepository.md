# 📂 Pasta/arquivo: repository/admin.repository.ts

## Descrição:

- **admin.repository.ts**  
  Este é o repositório específico da entidade `Admin`.  
  Ele estende a classe genérica `BaseRepository`, herdando os métodos padrão de acesso a dados como `findAll`, `findById`, `create`, `update` e `delete`.

## Vantagens:

- Elimina duplicação de código ao reutilizar métodos comuns do `BaseRepository`.
- Facilita a adição de métodos personalizados no futuro, mantendo a estrutura limpa e coesa.
- Organiza o acesso a dados da entidade `Admin` de forma desacoplada e reutilizável.

## Observações:

- Este repositório está preparado para crescer com métodos específicos da entidade `Admin`, como buscas por email, nome, ou validações específicas de relacionamento com `Abrigo` ou `Endereco`.
