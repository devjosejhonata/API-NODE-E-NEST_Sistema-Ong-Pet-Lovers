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

  // METODO PARA POST: Validação completa tornando todos os campos obrigatorios:
  async create(data: Endereco): Promise<Endereco> {
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

      return super.create(data);
  }

  // METODO PARA PUT: Validaçoes para campos opcionais, para atualização (somente campos enviados):
  async update(id: number, data: Partial<Endereco>): Promise<Endereco | null> {
    const errors: string[] = [];

      if ('estado' in data && (typeof data.estado !== 'string' || data.estado.trim().length !== 2)) {
        errors.push('Se fornecido, o Campo "estado" deve conter exatamente 2 caracteres.');
      }

      if ('cidade' in data && (typeof data.cidade !== 'string' || data.cidade.trim().length === 0)) {
        errors.push('Se fornecido, o Campo "cidade" é obrigatório.');
      }

      if ('bairro' in data && (typeof data.bairro !== 'string' || data.bairro.trim().length === 0)) {
        errors.push('Se fornecido, o Campo "bairro" é obrigatório.');
      }

      if ('rua' in data && (typeof data.rua !== 'string' || data.rua.trim().length === 0)) {
        errors.push('Se fornecido, o Campo "rua" é obrigatório.');
      }

      if ('numeroCasa' in data && (typeof data.numeroCasa !== 'string' || data.numeroCasa.trim().length === 0)) {
        errors.push('Se fornecido, o Campo "numeroCasa" é obrigatório.');
      }

      if (errors.length > 0) {
        throw new BadRequestException(errors);
      }

      return super.update(id, data);
  }
}
