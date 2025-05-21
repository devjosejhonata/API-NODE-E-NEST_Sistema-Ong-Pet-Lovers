/*
 - Camada de serviço da entidade Endereco.
 - Estende a lógica genérica de BaseService para reutilizar as operações padrão.
*/

import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from './base.service';
import { Endereco } from '../models/endereco.model';
import { EnderecoRepository } from '../repository/endereco.repository';

@Injectable()
export class EnderecoService extends BaseService<Endereco> {
  constructor(enderecoRepository: EnderecoRepository) {
    super(enderecoRepository);
  }

  //Validações para POST E PUT
  private validateEndereco(data: Partial<Endereco>): void {
    const errors: string[] = [];

    if (!data.estado || typeof data.estado !== 'string' || data.estado.trim().length !== 2) {
      errors.push('Campo "estado" deve conter exatamente 2 caracteres.');
    }

    if (!data.cidade || typeof data.cidade !== 'string' || data.cidade.trim().length === 0) {
      errors.push('Campo "cidade" é obrigatório.');
    }

    if (!data.bairro || typeof data.bairro !== 'string' || data.bairro.trim().length === 0) {
      errors.push('Campo "bairro" é obrigatório.');
    }

    if (!data.rua || typeof data.rua !== 'string' || data.rua.trim().length === 0) {
      errors.push('Campo "rua" é obrigatório.');
    }

    if (!data.numeroCasa || typeof data.numeroCasa !== 'string' || data.numeroCasa.trim().length === 0) {
      errors.push('Campo "numeroCasa" é obrigatório.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  // sobrescreve create para adicionar validação
  async create(data: Endereco): Promise<Endereco> {
    this.validateEndereco(data);
    return super.create(data);
  }

  // sobrescreve update para adicionar validação
  async update(id: number, data: Endereco): Promise<Endereco | null> {
    this.validateEndereco(data);
    return super.update(id, data);
  }
}
