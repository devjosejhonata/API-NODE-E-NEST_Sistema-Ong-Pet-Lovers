# 📂 Pasta/arquivo: repository/pet.repository.ts

## Descrição:

- **pet.repository.ts**  
  Este é o repositório específico da entidade `Pet`.  
  Ele estende a classe genérica `BaseRepository`, herdando os métodos padrão de acesso a dados como `findAll`, `findById`, `create`, `update` e `delete`.

## Vantagens:

- Elimina duplicação de código ao reutilizar métodos comuns do `BaseRepository`.
- Permite centralizar e organizar a lógica de acesso a dados da entidade `Pet`.
- Facilita a manutenção e extensão com métodos personalizados no futuro, caso necessário.
- Garante um padrão consistente de desenvolvimento em toda a aplicação.

## Observações:

- Este repositório está preparado para crescer com métodos específicos da entidade `Pet`, como filtros por `statusAdocao`, `raca`, `porte`, ou buscas por `nomePet` e `identidadePet`.
- Os relacionamentos com `Abrigo`, `Admin` e `Adotante` são automaticamente tratados para retornar os dados aninhados, incluindo os respectivos `enderecos` quando aplicável. Esse tratamento sendo feito em base.repository, pois estamos reaproveitando código para outras entidades.
