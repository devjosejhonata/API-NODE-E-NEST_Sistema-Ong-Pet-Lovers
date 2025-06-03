# 📌 Resumindo caso atual da API:

✅ Situação atual:

- Já temos a API funcional com todas as rotas prontas.
- Pronta para integrar com o frontend atual, que vai consumir as rotas /adotantes, /pets, etc.
- Não estamos planejando nenhuma mudança quebradora por agora (como mudar campos de retorno, remover algo, ou alterar regras de negócio).

👉 Conclusão:
Não precisa versionar agora. Podemos manter a API como está (/pets, /admin, etc.).

# 🔮 Futuro:

- **Quando o sistema já estiver em produção com frontend rodando, ou eu quiser fazer alguma alteração importnte mesmo em desenvolvimento, e quiser:**
- Remover ou mudar campos (ex: tirar nomePet, trocar sexo por genero),
- Mudar regras (ex: agora só admins podem ver certos dados),
- Adicionar recursos que impactam estrutura, como novas formas de login, ou comportamentos diferentes...

👉 Aí sim vale criar a /v2 para garantir que o frontend atual não quebre.

-----

# 📦 Entendendo sobre versionamento de API:

O versionamento de API é uma prática que define como o cliente (frontend, app mobile, outro sistema) acessa diferentes versões da mesma API. Assim, se mudar a estrutura da API no futuro, os clientes que usam a versão antiga não serão quebrados.

## Em resumo:

- Adicionar /v1, /v2... à sua URL é uma forma de isolar diferentes versões da sua API. Isso é útil quando: Você precisa modificar comportamentos, mudar nomes de campos, remover funcionalidades antigas, etc., sem quebrar os sistemas que já usam a versão anterior. Ex: A empresa já integrou o sistema ao seu frontend usando a /v1/pet. Você não pode simplesmente mudar essa rota ou sua resposta sem impactar o funcionamento. Se você simplesmente mudar a resposta da rota /v1/pet, todos os sistemas que usam a versão antiga quebrariam. Solução correta: criar /v2/pet com o novo formato, e manter /v1/pet estável.

- **Com versionamento:**
- URL: Frontend antigo usa: GET /v1/adotantes
- URL: Frontend novo usa: GET /v2/adotantes

👉 Assim, ambas as versões podem conviver, e podemos evoluir a API sem comprometer quem ainda está em uma versão anterior.

# 🛠️ Como implementar isso no código?

Não precisa duplicar o projeto inteiro em uma nova pasta. O que se faz geralmente é:

- **Criar pastas como**: 
- /src/modules/v1/adotante
- /src/modules/v2/adotante
- **Ou separar por módulos com versionamento**:
- /src/adotante/v1
- /src/adotante/v2

Na prática, o AppModule registra os módulos de acordo com a versão, então define o controller da versão 2 com outro caminho. 

# ✅ Benefícios do versionamento:

- | Benefício            | Descrição                                    |
- | -------------------- | -------------------------------------------- |
- | **Evita quebra**     | Mudanças futuras não afetam clientes antigos |
- | **Organização**      | Você sabe qual código atende qual versão     |
- | **Transição suave**  | Clientes migram quando estiverem prontos     |
- | **Profissionalismo** | É padrão em APIs bem estruturadas            |

# 👥 Como os devs e clientes sabem qual versão estão usando?

**Para clientes/frontends** :

- A URL da requisição deixa claro:
- https://api.petlovers.com.br/v1/adotante
- https://api.petlovers.com.br/v2/adotante

**A documentação Swagger pode ser separada por versão**:
- /api/v1
- /api/v2

**Para devs**:
- No repositório, mantém a estrutura bem definida por versões.
- Pode até manter uma branch separada (v1-stable, main, v2-dev).
- No Swagger e nos commits, documenta quais rotas fazem parte de cada versão.

# EXEMPLO DE COMO ORGANIZAR O VERSIONAMENTO NA ESTRUTURA ATUAL:

- src/
- ├── v1/                # <- Nova pasta para isolar a versão atual da API
- │   ├── auth/          # Pode reutilizar ou duplicar se necessário
- │   ├── controllers/   # Controllers da v1
- │   ├── models/        # Models (podem ser compartilhados, exceto se mudarem)
- │   ├── modules/       # Modules da v1
- │   ├── repository/    # Repositórios da v1
- │   ├── services/      # Serviços da v1
- │   ├── utils/         # Utils podem ser compartilhados
- ├── shared/            # Arquivos reutilizáveis entre versões (opcional)
- ├── config/            # Configurações globais
- main.ts

**💡 COMO FUNCIONA NA PRÁTICA?**

- Se move o código atual para dentro da pasta v1/, deixando claro que ele pertence à versão 1.
- As rotas passam a estar sob o prefixo /v1/, por exemplo: GET /v1/adotantes, POST /v1/pets, etc.
- No main.ts, ajusta o prefixo global da API: app.setGlobalPrefix('v1');

**🆚 E QUANDO HOUVER UMA v2?**

- Criar uma nova pasta v2/ com apenas os arquivos que precisar mudar.
- Tudo o que não mudou (models, repositórios, utils, etc.) pode ser reutilizado da v1 ou colocado em shared/ se quiser.

**👥 BENEFÍCIOS:**

- Manutenção clara por versão.
- Isolamento de mudanças.
- Evita que versões antigas quebrem quando a nova for lançada.
- Ajuda o frontend a saber exatamente o que está usando (/v1 ou /v2).

