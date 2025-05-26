/*
 
  - BASE REPOSITORY - Classe genérica de repositório para acesso a dados via TypeORM.
  - Esta classe define métodos reutilizáveis e padronizados. 
  - Serve como uma base genérica que pode ser estendida por repositórios específicos (ex: endereco.repository.ts), evitando repetição de código.
  - Esta abordagem promove:
      • Organização e centralização da lógica de acesso a dados.
      • Redução de código duplicado entre repositórios.
      • Facilidade de manutenção e escalabilidade no projeto.
*/


import { Repository, ObjectLiteral, DeepPartial, FindManyOptions } from 'typeorm'; // Importações necessárias do TypeORM

// Classe genérica BaseRepository, onde T é uma entidade do TypeORM
export class BaseRepository<T extends ObjectLiteral> {

  // Atributo opcional para armazenar relações
  protected relations: string[] = [];

  constructor(// Injeta o repositório da entidade específica no construtor
    protected readonly repository: Repository<T>,
    private readonly primaryKey: keyof T // nome do campo da chave primária
  ) {}
  
  // METODO: Retorna todos os registros da entidade
  async findAll(): Promise<T[]> {// Executa a consulta para listar todos os dados
    return this.repository.find({ 
      relations: this.relations // Retorna os dados da relação
    }); 
  }

  // METODO: Retorna um registro da entidade com base no ID
  async findById(id: number): Promise<T | null> {
    return this.repository.findOne({
      where: { [this.primaryKey]: id } as any,// Retorna o registro com base na chave primária dinamicamente informada no construtor
      relations: this.relations, // Retorna os dados da relação
    });
  }

  // METODO: Cria e salva um novo registro no banco de dados
  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data); // Cria uma nova instância da entidade
    return this.repository.save(entity); // Persiste a entidade no banco e retorna
  }

  // METODO: Atualiza um registro existente com os novos dados fornecidos
  async update(id: number, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findById(id); // Busca o registro existente pelo ID
    if (!entity) return null; // Se não existir, retorna null

      // Aqui Atualiza relacionamentos genéricos
      if ('endereco_id' in data && typeof data.endereco_id === 'number') {// Atualiza o relacionamento se for apenas o ID
        (data as any).endereco_id = { id_endereco: data.endereco_id };
      }

      if ('abrigo_id' in data && typeof data.abrigo_id === 'number') {
        (data as any).abrigo_id = { id_abrigo: data.abrigo_id };
      }

  const updatedEntity = this.repository.merge(entity, data); // Mescla os dados antigos com os novos
  await this.repository.save(updatedEntity); // Salva a entidade atualizada no banco

  return this.repository.findOne({// Recarrega a entidade com os relacionamentos atualizados
    where: { [this.primaryKey]: id } as any,
    relations: this.relations, // usa dinamicamente as relações definidas no repositório filho
  });

}

// METODO: Exclui um registro do banco de dados com base no ID
async delete(id: number): Promise<boolean> {
  const result = await this.repository.delete({ [this.primaryKey]: id } as any); // Executa o delete pela chave primária
  return result.affected !== 0; // Retorna true se algum registro foi deletado
}

// METODO: Paginação, funcionalidade de Paginação dos dados retornados da API, genérica com filtros opcionais
// retorno dos dados de relacionamento incluso em paginate, como relaçao com endereco
async paginate(
    page: number = 1,
    limit: number = 10,
    filters?: Partial<T>
  ): Promise<{ data: T[]; total: number; page: number; limit: number }> {
    const options: FindManyOptions<T> = {
      where: filters as any,
      skip: (page - 1) * limit,
      take: limit,
      relations: this.relations, // Inclui as relações se definidas
    };

    const [data, total] = await this.repository.findAndCount(options);
    return { data, total, page, limit };
  }
}
