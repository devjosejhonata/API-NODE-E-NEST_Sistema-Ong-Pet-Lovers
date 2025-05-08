/*
 - Serviço base que contém métodos genéricos reutilizáveis por outros serviços de entidades.
*/
export abstract class BaseService<T> {
    // Retorna todos os registros
    findAll(): any {
      return {
        statusCode: 200,
        data: [],
        message: 'Registros retornados com sucesso.',
      };
    }
  
    // Retorna um registro específico por ID
    findOne(id: number): any {
      return {
        statusCode: 200,
        data: { id },
        message: `Registro ${id} retornado com sucesso.`,
      };
    }
  
    // Cria um novo registro
    create(data: T): any {
      return {
        statusCode: 201,
        data,
        message: 'Registro criado com sucesso.',
      };
    }
  
    // Atualiza um registro existente
    update(id: number, data: T): any {
      return {
        statusCode: 200,
        data,
        message: `Registro ${id} atualizado com sucesso.`,
      };
    }
  
    // Remove um registro
    remove(id: number): any {
      return {
        statusCode: 204,
        message: `Registro ${id} removido com sucesso.`,
      };
    }
  }
  