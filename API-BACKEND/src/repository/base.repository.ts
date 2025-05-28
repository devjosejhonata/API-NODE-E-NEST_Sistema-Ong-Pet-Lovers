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

  protected relations: string[] = [];// Atributo opcional para armazenar relações

  constructor(
    protected readonly repository: Repository<T>,// Injeta o repositório da entidade específica no construtor
    private readonly primaryKey: keyof T // nome do campo da chave primária
  ) {}
  
  // METODO: Retorna todos os registros da entidade, com Paginação:
  /* Tratamento de retorno para Filtros opcionais aqui dentro. */
  async findAll(
          filters?: Partial<T>, page?: number, limit?: number
      ): Promise<[T[], number]> {  // retorna array de entidades + total
          const options: FindManyOptions<T> = {
            relations: this.relations, where: filters || {},
      };

      if (page && limit) {
          options.skip = (page - 1) * limit; options.take = limit;
      }
      return this.repository.findAndCount(options);
  }

  // METODO: Retorna um registro da entidade com base no ID:
  async findById(id: number): Promise<T | null> {
    return this.repository.findOne({
      where: { [this.primaryKey]: id } as any, relations: this.relations, 
    });
  }

  // METODO: Cria e salva um novo registro no banco de dados: 
  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data); 
    return this.repository.save(entity); 
  }

  // METODO: Atualiza um registro existente com os novos dados fornecidos:
  async update(id: number, data: DeepPartial<T>): Promise<T | null> {
    const entity = await this.findById(id); 
    if (!entity) return null; 

      /* 
         Aqui abaixo atualiza relacionamentos genéricos, usados por entidades com esses relacionamentos. 
         Obs: Se no futuro uma nova entidade tiver outro relacionamento, basta adicionar um if semelhante a este trecho no método update(). 
      */
      if ('endereco_id' in data && typeof data.endereco_id === 'number') {
        (data as any).endereco_id = { id_endereco: data.endereco_id };
      }

      if ('abrigo_id' in data && typeof data.abrigo_id === 'number') {
        (data as any).abrigo_id = { id_abrigo: data.abrigo_id };
      }

  const updatedEntity = this.repository.merge(entity, data); /* Mescla os dados antigos com os novos */
  await this.repository.save(updatedEntity); 

  return this.repository.findOne({/* Recarrega a entidade com os relacionamentos atualizados */
    where: { [this.primaryKey]: id } as any, relations: this.relations, 
  });

}

// METODO: Exclui um registro do banco de dados com base no ID:
async delete(id: number): Promise<boolean> {
  const result = await this.repository.delete({ [this.primaryKey]: id } as any); 
  return result.affected !== 0; /* Retorna true se algum registro foi deletado */
}

}
