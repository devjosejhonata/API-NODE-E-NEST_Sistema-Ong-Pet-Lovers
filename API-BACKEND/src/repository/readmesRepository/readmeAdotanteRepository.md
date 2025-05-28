# 📂 Pasta/arquivo: repository/adotante.repository.ts

## Descrição:

- **adotante.repository.ts**  
  Este é o repositório específico da entidade `Adotante`.  
  Ele estende a classe genérica `BaseRepository`, herdando os métodos padrão de acesso a dados como `findAll`, `findById`, `create`, `update`, `delete`.

## Vantagens:

- Elimina duplicação de código ao reutilizar métodos comuns do `BaseRepository`.
- Permite centralizar e organizar a lógica de acesso a dados da entidade `Adotante`.
- Facilita a manutenção e extensão com métodos personalizados no futuro, caso necessário.
- Garante um padrão consistente de desenvolvimento em toda a aplicação.

## Observações:

- Este repositório está preparado para crescer com métodos específicos da entidade `Adotante`, como buscas por `email`, `nome`, ou verificações de existência por `RG`, por exemplo.
