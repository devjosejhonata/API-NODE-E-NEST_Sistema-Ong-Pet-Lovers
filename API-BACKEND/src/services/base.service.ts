/*
 - Serviço base que contém métodos genéricos reutilizáveis por outros serviços de entidades.
 - Nesse base.service, contém validações como statusCode, HttpStatus, BAD_REQUEST
*/

import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseService<T> {
  Delete: any;
  constructor(private readonly repository: any) {}

// Retorna todos os registros
async findAll(): Promise<any> {
  const data = await this.repository.findAll();
  return {
    statusCode: HttpStatus.OK,
    message: 'Registros retornados com sucesso.',
    data,
  };
}

// Retorna um registro específico por ID
async findOne(id: number): Promise<any> {
  const data = await this.repository.findById(id);
  if (!data) {
    throw new HttpException(`Registro ${id} não encontrado.`, HttpStatus.NOT_FOUND);
  }
  return {
    statusCode: HttpStatus.OK,
    message: `Registro ${id} retornado com sucesso.`,
    data,
  };
}

// Cria um novo registro
async create(data: T): Promise<any> {
  try {
    const created = await this.repository.create(data);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Registro criado com sucesso.',
      data: created,
    };
  } catch (error: any) {
    throw new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Bad Request Exception',
        errors: error.response?.message || error.message || 'Erro desconhecido',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

/// Atualiza um registro existente com os dados fornecidos (parciais ou completos)
async update(id: number, data: Partial<T>): Promise<any> {
  try {
    const updated = await this.repository.update(id, data);

    if (!updated) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Registro não encontrado.',
        data: null,
      };
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Registro atualizado com sucesso.',
      data: updated,
    };
  } catch (error: any) {
    throw new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Erro ao atualizar o registro.',
        errors: error.response?.message || error.message || 'Erro desconhecido',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}


// Remove um registro
async remove(id: number): Promise<any> {
  const deleted = await this.repository.delete(id);
  if (!deleted) {
    throw new HttpException(`Registro ${id} não encontrado para remoção.`, HttpStatus.NOT_FOUND);
  }
  return {
    statusCode: HttpStatus.OK,
    message: `Registro ${id} removido com sucesso.`,
  };
}

// Paginação / Funcionalidade de Paginação dos dados retornados da API, com filtros opcionais
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

// VALIDAÇÕES REUTILIZAVEIS
// Validação para campos de nome (ex: nomeAbrigo, nomeAdmin, nomeAdotante, nomePet), deve ser reaproveitada pelas entidades
protected validateNome(field: string, value: string, errors: string[]) {
  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    errors.push(`Campo "${field}" é obrigatório.`);
  } else if (value.length > 100) {
    errors.push(`Campo "${field}" deve ter no máximo 100 caracteres.`);
  }
}

// Validação para campos de email (ex: emailAbrigo, emailAdmin, emailAdotante), deve ser reaproveitada pelas entidades
protected validateEmail(field: string, value: string, errors: string[]) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    errors.push(`Campo "${field}" é obrigatório.`);
  } else if (!emailRegex.test(value)) {
    errors.push(`Campo "${field}" deve conter um e-mail válido.`);
  } else if (value.length > 150) {
    errors.push(`Campo "${field}" deve ter no máximo 150 caracteres.`);
  }
}

// Validação para campos de celular (ex: celularAbrigo, celularAdmin, celularAdotante), deve ser reaproveitada pelas entidades
protected validateCelular(field: string, value: string, errors: string[]) {
  const celularRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    errors.push(`Campo "${field}" é obrigatório.`);
  } else if (!celularRegex.test(value)) {
    errors.push(`Campo "${field}" deve conter um número de celular válido (ex: (11) 91234-5678).`);
  } else if (value.length > 20) {
    errors.push(`Campo "${field}" deve ter no máximo 20 caracteres.`);
  }
}

// Validação para campos de senha (ex: senhaAdmin, senhaAdotante), deve ser reaproveitada pelas entidades
protected validateSenha(field: string, value: string, errors: string[]) {
  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    errors.push(`Campo "${field}" é obrigatório.`);
  } else if (value.length < 6) {
    errors.push(`Campo "${field}" deve conter no mínimo 6 caracteres.`);
  } else if (value.length > 50) {
    errors.push(`Campo "${field}" deve ter no máximo 50 caracteres.`);
  }
}

// Validação para campos de data de cadastro (ex: dataCadastroAdmin, dataCadastroAdotante)
protected validateDataCadastro(field: string, value: any, errors: string[]) {
  const data = new Date(value);
  if (!value || isNaN(data.getTime())) {
    errors.push(`Campo "${field}" é obrigatório e deve conter uma data válida.`);
  }
}



}
