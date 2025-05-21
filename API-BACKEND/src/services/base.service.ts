/*
 - Serviço base que contém métodos genéricos reutilizáveis por outros serviços de entidades.
*/
export abstract class BaseService<T> {
  Delete: any;
  constructor(private readonly repository: any) {}

// Retorna todos os registros
async findAll(): Promise<T[]> {
  return this.repository.findAll();
}

// Retorna um registro específico por ID
async findOne(id: number): Promise<T | null> {
  return this.repository.findById(id);
}

// Cria um novo registro
async create(data: T): Promise<T> {
  return this.repository.create(data);
}

// Atualiza um registro existente
async update(id: number, data: T): Promise<T | null> {
  return this.repository.update(id, data);
}

// Remove um registro
async remove(id: number): Promise<boolean> {
  return this.repository.delete(id);
}

// Funcionalidade de Paginação dos dados retornados da API, com filtros opcionais
async paginate(
  page: number = 1,
  limit: number = 10,
  filters?: Partial<T>
): Promise<any> {
  const result = await this.repository.paginate(page, limit, filters);
  return {
    statusCode: 200,
    ...result,
    message: 'Registros paginados retornados com sucesso.',
  };
}


}
