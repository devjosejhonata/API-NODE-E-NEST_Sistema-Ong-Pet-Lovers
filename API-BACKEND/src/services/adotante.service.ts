/*
  - Camada de serviço da entidade Adotante.
  - Estende a lógica genérica de BaseService para reutilizar operações padrão.
  - Adiciona validações específicas da entidade antes de criar ou atualizar registros.
*/

import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from './base.service';
import { Adotante } from '../models/adotante.model';
import { AdotanteRepository } from '../repository/adotante.repository';

@Injectable()
export class AdotanteService extends BaseService<Adotante> {
  constructor(adotanteRepository: AdotanteRepository) {
    super(adotanteRepository);
  }

  // MÉTODO: Validação específica da entidade Adotante
  private validateAdotante(data: any): void {
    const errors: string[] = [];

    // Validações reutilizáveis do BaseService
    this.validateNome('nomeAdotante', data.nomeAdotante as string, errors);
    this.validateEmail('emailAdotante', data.emailAdotante as string, errors);
    this.validateCelular('celularAdotante', data.celularAdotante as string, errors);
    this.validateSenha('senhaAdotante', data.senhaAdotante as string, errors);
    this.validateDataCadastro('dataCadastroAdotante', data.dataCadastroAdotante as Date, errors);

    // RG: Validação específica da entidade: RG
    if (!data.rgAdotante || typeof data.rgAdotante !== 'string' || data.rgAdotante.trim().length < 5) {
      errors.push('Campo "rgAdotante" é obrigatório e deve conter ao menos 5 caracteres.');
    }

    // Validação de relacionamento
    if (!data.endereco_id || typeof data.endereco_id !== 'number') {
      errors.push('Campo "endereco_id" é obrigatório e deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  // MÉTODO: CRIAR, chamando validações do metodo validateAdmin, devem ser obrigatorios
  async create(data: Adotante): Promise<Adotante> {
    this.validateAdotante(data);
    return super.create(data);
  }

  // MÉTODO: ATUALIZAR
  async update(id: number, data: Partial<Adotante>): Promise<Adotante | null> {
    const errors: string[] = [];

    if ('nomeAdotante' in data) {
      this.validateNome('nomeAdotante', data.nomeAdotante as string, errors);
    }
    if ('emailAdotante' in data) {
      this.validateEmail('emailAdotante', data.emailAdotante as string, errors);
    }
    if ('celularAdotante' in data) {
      this.validateCelular('celularAdotante', data.celularAdotante as string, errors);
    }
    if ('senhaAdotante' in data) {
      this.validateSenha('senhaAdotante', data.senhaAdotante as string, errors);
    }
    if ('dataCadastroAdotante' in data) {
      this.validateDataCadastro('dataCadastroAdotante', data.dataCadastroAdotante as Date, errors);
    }
    if ('rgAdotante' in data && (typeof data.rgAdotante !== 'string' || data.rgAdotante.trim().length < 7)) {
      errors.push('Campo "rgAdotante" deve conter ao menos 7 caracteres.');
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
