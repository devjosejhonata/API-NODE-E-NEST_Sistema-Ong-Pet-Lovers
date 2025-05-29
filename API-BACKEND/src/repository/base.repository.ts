/*
 
  - BASE REPOSITORY - Classe genérica de repositório para acesso a dados via TypeORM.
  - Esta classe define métodos reutilizáveis e padronizados. 
  - Serve como uma base genérica que pode ser estendida por repositórios específicos (ex: endereco.repository.ts), evitando repetição de código.
  - Esta abordagem promove:
      • Organização e centralização da lógica de acesso a dados.
      • Redução de código duplicado entre repositórios.
      • Facilidade de manutenção e escalabilidade no projeto.
*/

import { Repository, ObjectLiteral, DeepPartial, DataSource } from 'typeorm'; // Importações necessárias do TypeORM

// Classe genérica BaseRepository, onde T é uma entidade do TypeORM
export class BaseRepository<T extends ObjectLiteral> {

protected relations: string[] = [];// Atributo opcional para armazenar relações

constructor(
    protected readonly repository: Repository<T>,// Injeta o repositório da entidade específica no construtor
    protected readonly dataSource: DataSource,
    private readonly primaryKey: keyof T // nome do campo da chave primária
) {}

 // METODO: Retorna todos os registros da entidade, com Paginação:
/* Tratamento de retorno para Filtros opcionais aqui dentro, como Data e Nome. */
async findAll(filters?: Partial<T>, page?: number, limit?: number): Promise<[T[], number]> {
    
    /** Verificando as relações e exibindo dados corretamente **/
    const alias = 'entidade';
    const query = this.repository.createQueryBuilder(alias); 

    const relations = this.repository.metadata.relations.map(r => r.propertyName);

    if (relations.includes('abrigo_id')) {/* Join do abrigo e seu endereco */
          query.leftJoinAndSelect(`${alias}.abrigo_id`, 'abrigo');

          const abrigoMetadata = this.dataSource.getMetadata('Abrigo');
          const abrigoRelations = abrigoMetadata.relations.map((r) => r.propertyName);

          if (abrigoRelations.includes('endereco_id')) {/* Join do próprio endereco da entidade */
            query.leftJoinAndSelect(`abrigo.endereco_id`, 'enderecoAbrigo'); 
          }
    }

    if (relations.includes('endereco_id')) {
          query.leftJoinAndSelect(`${alias}.endereco_id`, 'endereco');
    }

    /** Filtragem **/
    if (filters) {
        for (const [key, value] of Object.entries(filters)) {
          const lowerKey = key.toLowerCase();

          /* filtro por nome */
          if (lowerKey.includes('nome')) 
              { query.andWhere( `REPLACE(${alias}.${key}, ' ', '') COLLATE Latin1_General_CI_AI LIKE :${key}`, { [key]: `%${String(value).replace(/\s/g, '')}%` } );
          
          /* filtro por data */
          } else if ( typeof value === 'string' && lowerKey.includes('data') && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
              query.andWhere(`${alias}.${key} BETWEEN :inicio AND :fim`, { inicio: `${value}T00:00:00.000Z`, fim: `${value}T23:59:59.999Z`, });
          
          /* filtros padrão (ex: id, email, etc) */
          } else {
              query.andWhere(`${alias}.${key} = :${key}`, { [key]: value });
          }
        }
    }

    /** Paginação **/
    if (page && limit) { query.skip((page - 1) * limit).take(limit); }

    /** retorna os registros encontrados **/
    return query.getManyAndCount(); 
}

// METODO: Retorna um registro da entidade com base no ID:
async findById(id: number): Promise<T | null> {

      /** Verificando as relações e exibindo dados corretamente **/
      const alias = 'entidade';
      const query = this.repository.createQueryBuilder(alias).where(`${alias}.${String(this.primaryKey)} = :id`, { id });
        
      const relations = this.repository.metadata.relations.map(r => r.propertyName);
    
      if (relations.includes('abrigo_id')) {/* Join do abrigo e seu endereco */
            query.leftJoinAndSelect(`${alias}.abrigo_id`, 'abrigo');

            const abrigoMetadata = this.dataSource.getMetadata('Abrigo');
            const abrigoRelations = abrigoMetadata.relations.map((r) => r.propertyName);

            if (abrigoRelations.includes('endereco_id')) {
              query.leftJoinAndSelect(`abrigo.endereco_id`, 'enderecoAbrigo');
            }
      }

      if (relations.includes('endereco_id')) {/* Join do próprio endereco da entidade */
            query.leftJoinAndSelect(`${alias}.endereco_id`, 'endereco');
      }

      return query.getOne();
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
