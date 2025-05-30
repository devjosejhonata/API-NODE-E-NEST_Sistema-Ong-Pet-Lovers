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

constructor(
    protected readonly repository: Repository<T>,// Injeta o repositório da entidade específica no construtor
    protected readonly dataSource: DataSource,
    private readonly primaryKey: keyof T // nome do campo da chave primária
) {}

// METODO: Retorna todos os registros da entidade, com Paginação:
/* Tratamento de retorno para Filtros opcionais aqui dentro, como Data e Nome. */
async findAll(filters?: Partial<T>, page?: number, limit?: number): Promise<[T[], number]> {
    
    /*** Relacionamentos, verificando as relações e exibindo dados corretamente ***/
    const alias = 'entidade';
    const query = this.repository.createQueryBuilder(alias); 

    /* --> Join do próprio endereco da entidade, relacionamento direto; (ex: entidade.endereco_id) */
    const relations = this.repository.metadata.relations.map(r => r.propertyName);

    if (relations.includes('endereco_id')) { query.leftJoinAndSelect(`${alias}.endereco_id`, 'endereco'); }

    /* --> Joins aninhados, exibe a lista de relacionamentos com possíveis joins aninhados com endereco */
    const nestedJoins = [
        { relationName: 'abrigo_id', alias: 'abrigo', enderecoAlias: 'enderecoAbrigo' },
        { relationName: 'adotante_id', alias: 'adotante', enderecoAlias: 'enderecoAdotante' },
        { relationName: 'admin_id', alias: 'admin', enderecoAlias: 'enderecoAdmin' },
    ];

    for (const { relationName, alias: relAlias, enderecoAlias } of nestedJoins) {
        if (relations.includes(relationName)) { 
          
            query.leftJoinAndSelect(`${alias}.${relationName}`, relAlias);

            /* Verifica se a relação tem endereco_id (ex: abrigo.endereco_id) */
            const metadata = this.dataSource.getMetadata(relAlias.charAt(0).toUpperCase() + relAlias.slice(1));
            const subRelations = metadata.relations.map(r => r.propertyName);

            if (subRelations.includes('endereco_id')) { query.leftJoinAndSelect(`${relAlias}.endereco_id`, enderecoAlias); }
        }
    }

    /*** Filtragem ***/
    if (filters) {
        for (const [key, value] of Object.entries(filters)) {
          const lowerKey = key.toLowerCase();

          /* filtros para campos específicos */
          if (lowerKey.includes('nome') || lowerKey.includes('celular') || 
              lowerKey === 'raca' || lowerKey === 'porte' || lowerKey === 'statusadocao' || lowerKey === 'identidadePet' || 
              lowerKey === 'rgadotante' ||  
              lowerKey === 'rua' || lowerKey === 'bairro' || lowerKey === 'cidade' || lowerKey === 'numerocasa'
              ) { 
            
              query.andWhere(`REPLACE(REPLACE(${alias}.${key}, ' ', ''), '-', '') COLLATE Latin1_General_CI_AI LIKE :${key}`, { [key]: `%${String(value).replace(/\s|-/g, '')}%` }
          
          );
      
          /* filtro por data */
          } else if ( typeof value === 'string' && lowerKey.includes('data') && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
              query.andWhere(`${alias}.${key} BETWEEN :inicio AND :fim`, { inicio: `${value}T00:00:00.000Z`, fim: `${value}T23:59:59.999Z`, });
          
          /* filtros padrão (ex: id, email, etc) */
          } else {
              query.andWhere(`${alias}.${key} = :${key}`, { [key]: value });
          }
        }
    }

    /*** Paginação ***/
    if (page && limit) { query.skip((page - 1) * limit).take(limit); }

    /*** retorna os registros encontrados ***/
    return query.getManyAndCount(); 
}

// METODO: Retorna um registro da entidade com base no ID:
async findById(id: number): Promise<T | null> {

    /*** Relacionamentos, verificando as relações e exibindo dados corretamente ***/
    const alias = 'entidade';
    const query = this.repository.createQueryBuilder(alias).where(`${alias}.${String(this.primaryKey)} = :id`, { id });

    /* --> Join do próprio endereco da entidade, relacionamento direto; (ex: entidade.endereco_id) */
    const relations = this.repository.metadata.relations.map(r => r.propertyName);

    if (relations.includes('endereco_id')) { query.leftJoinAndSelect(`${alias}.endereco_id`, 'endereco'); }

    /* --> Joins aninhados, exibe a lista de relacionamentos com possíveis joins aninhados com endereco (ex: entidade.abrigo_id.endereco_id) */
    const nestedJoins = [
        { relationName: 'abrigo_id', alias: 'abrigo', enderecoAlias: 'enderecoAbrigo' },
        { relationName: 'adotante_id', alias: 'adotante', enderecoAlias: 'enderecoAdotante' },
        { relationName: 'admin_id', alias: 'admin', enderecoAlias: 'enderecoAdmin' },
    ];

    for (const { relationName, alias: relAlias, enderecoAlias } of nestedJoins) {
        if (relations.includes(relationName)) {
            query.leftJoinAndSelect(`${alias}.${relationName}`, relAlias);

            const metadata = this.dataSource.getMetadata(relAlias.charAt(0).toUpperCase() + relAlias.slice(1));
            const subRelations = metadata.relations.map(r => r.propertyName);

            if (subRelations.includes('endereco_id')) { query.leftJoinAndSelect(`${relAlias}.endereco_id`, enderecoAlias); }
        }
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

      if ('admin_id' in data && typeof data.admin_id === 'number') {
        (data as any).admin_id = { id_admin: data.admin_id };
      }

      if ('adotante_id' in data && typeof data.adotante_id === 'number') {
        (data as any).adotante_id = { id_adotante: data.adotante_id };
      }

    /* --> Mescla os dados antigos com os novos */
    const updatedEntity = this.repository.merge(entity, data); 
    await this.repository.save(updatedEntity); 

    /* --> Recarrega a entidade com os relacionamentos atualizados */
    return this.repository.findOne({
      where: { [this.primaryKey]: id } as any, relations: this.repository.metadata.relations.map(r => r.propertyName), 
    });

}

// METODO: Exclui um registro do banco de dados com base no ID:
async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete({ [this.primaryKey]: id } as any); 
    return result.affected !== 0; /* Retorna true se algum registro foi deletado */
}

}
