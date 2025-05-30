/*
  - Camada de serviço da entidade Abrigo.
  - Estende a lógica genérica de BaseService para reutilizar as operações padrão.
  - Adiciona validações específicas para a entidade antes de criar ou atualizar registros.
*/

import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from './base.service';
import { Abrigo } from '../models/abrigo.model';
import { AbrigoRepository } from '../repository/abrigo.repository';

@Injectable()
export class AbrigoService extends BaseService<Abrigo> {
  constructor(abrigoRepository: AbrigoRepository) {
    super(abrigoRepository);
  }

  // METODO PARA POST: Validações obrigatorias para POST em Abrigo:
  private validateAbrigo(data: any): void {
    const errors: string[] = [];

    /* Validações herdadas do BaseService */
    this.validateNome('nomeAbrigo', data.nomeAbrigo as string, errors);
    this.validateEmail('emailAbrigo', data.emailAbrigo as string, errors);
    this.validateCelular('celularAbrigo', data.celularAbrigo as string, errors);

    /* Validação do relacionamento com endereço */
    if (!data.endereco_id || typeof data.endereco_id !== 'number') {
      errors.push('Campo "endereco_id" é obrigatório e deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  // METODO: Validação para criar, herdando de validadeAbrigo:
  /* Sobrescreve o método create para adicionar validações */
  async create(data: Abrigo): Promise<Abrigo> {
    this.validateAbrigo(data);
    return super.create(data);
  }

  // METODO PARA PUT: VALIDAÇÃO PARA ATUALIZAR:
  /* Validaçoes para campos opcionais, somente os campos que foram enviados (parciais) */
  async update(id: number, data: Partial<Abrigo>): Promise<Abrigo | null> {
    const errors: string[] = [];

    if ('nomeAbrigo' in data) {
      this.validateNome('nomeAbrigo', data.nomeAbrigo as string, errors);
    }

    if ('emailAbrigo' in data) {
      this.validateEmail('emailAbrigo', data.emailAbrigo as string, errors);
    }

    if ('celularAbrigo' in data) {
      this.validateCelular('celularAbrigo', data.celularAbrigo as string, errors);
    }

    if ('endereco_id' in data && typeof data.endereco_id !== 'number') {
      errors.push('Campo "endereco_id" deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return super.update(id, data);
}

}
