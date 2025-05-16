/*
 - Serviço base que contém métodos genéricos reutilizáveis por outros serviços de entidades.
*/
export abstract class BaseService<T> {
  constructor(private readonly repository: any) {}

// Retorna todos os registros
async findAll(): Promise<any> {
  const data = await this.repository.findAll();
  return {
    message: 'Registros retornados com sucesso.',
    statusCode: 200,
    data,
  };
}

// Retorna um registro específico por ID
async findOne(id: number): Promise<any> {
  const data = await this.repository.findById(id);
  if (!data) {
    return {
      statusCode: 404,
      message: `Registro ${id} não encontrado.`,
    };
  }
  return {
    statusCode: 200,
    data,
    message: `Registro ${id} retornado com sucesso.`,
  };
}

// Cria um novo registro
async create(data: T): Promise<any> {
  const createdData = await this.repository.create(data);
  return {
    statusCode: 201,
    data: createdData,
    message: 'Registro criado com sucesso.',
  };
}

// Atualiza um registro existente
async update(id: number, data: T): Promise<any> {
  const updated = await this.repository.update(id, data);
  if (!updated) {
    return {
      statusCode: 404,
      message: `Registro ${id} não encontrado para atualização.`,
    };
  }
  return {
    statusCode: 200,
    data: updated,
    message: `Registro ${id} atualizado com sucesso.`,
  };
}

// Remove um registro
async remove(id: number): Promise<any> {
  const deleted = await this.repository.delete(id);
  if (!deleted) {
    return {
      statusCode: 404,
      message: `Registro ${id} não encontrado para remoção.`,
    };
  }
  return {
    statusCode: 200,
    message: `Registro ${id} removido com sucesso.`,
  };
}

}
