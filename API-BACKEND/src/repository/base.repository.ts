/*
 
  - BASE REPOSITORY - Classe genérica de repositório para acesso a dados via TypeORM.
  - Esta classe define métodos reutilizáveis e padronizados. 
  - Serve como uma base genérica que pode ser estendida por repositórios específicos (ex: endereco.repository.ts), evitando repetição de código.
  - Esta abordagem promove:
      • Organização e centralização da lógica de acesso a dados.
      • Redução de código duplicado entre repositórios.
      • Facilidade de manutenção e escalabilidade no projeto.
*/


import { Repository, ObjectLiteral, DeepPartial } from 'typeorm'; // Importações necessárias do TypeORM

// Define a classe genérica BaseRepository, onde T é uma entidade do TypeORM
export class BaseRepository<T extends ObjectLiteral> {

  constructor(// Injeta o repositório da entidade específica no construtor
    protected readonly repository: Repository<T>,
    private readonly primaryKey: keyof T // nome do campo da chave primária
  ) {}
  
  // Retorna todos os registros da entidade
  async findAll(): Promise<T[]> {
    return this.repository.find(); // Executa a consulta para listar todos os dados
  }

  // Retorna um registro da entidade com base no ID
  async findById(id: number): Promise<T | null> {
    return this.repository.findOneBy({ [this.primaryKey]: id } as any);// Retorna o registro com base na chave primária dinamicamente informada no construtor
  }

  // Cria e salva um novo registro no banco de dados
  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data); // Cria uma nova instância da entidade
    return this.repository.save(entity); // Persiste a entidade no banco e retorna
  }

  // Atualiza um registro existente com os novos dados fornecidos
  async update(id: number, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findById(id); // Busca o registro existente pelo ID
    if (!entity) return null; // Se não existir, retorna null

    const updated = this.repository.merge(entity, data); // Mescla os dados antigos com os novos
    return this.repository.save(updated); // Salva a entidade atualizada no banco
  }

  // Exclui um registro do banco de dados com base no ID
  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete({ [this.primaryKey]: id } as any); // Executa o delete pela chave primária
    return result.affected !== 0; // Retorna true se algum registro foi deletado
  }

  // Funcionalidade de Paginação dos dados retornados da API, genérica com filtros opcionais
  async paginate(
    page: number = 1,
    limit: number = 10,
    filters?: Partial<T>
  ): Promise<{ data: T[]; total: number; page: number; limit: number }> {
    const [data, total] = await this.repository.findAndCount({
      where: filters as any, skip: (page - 1) * limit, take: limit,
    });

    return { data, total, page, limit, };
  }
}
