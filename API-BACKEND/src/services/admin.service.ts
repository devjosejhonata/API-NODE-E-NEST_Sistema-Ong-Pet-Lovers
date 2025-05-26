/*
  - Camada de serviço da entidade Admin.
  - Estende a lógica genérica de BaseService para reutilizar operações padrão.
  - Adiciona validações específicas da entidade antes de criar ou atualizar registros.
*/

import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from './base.service';
import { Admin } from '../models/admin.model';
import { AdminRepository } from '../repository/admin.repository';

@Injectable()
export class AdminService extends BaseService<Admin> {
  constructor(adminRepository: AdminRepository) {
    super(adminRepository);
  }

  // MÉTODO: Validação específica da entidade Admin
  private validateAdmin(data: any): void {
    const errors: string[] = [];

    // Validações reutilizáveis do BaseService
    this.validateNome('nomeAdmin', data.nomeAdmin as string, errors);
    this.validateEmail('emailAdmin', data.emailAdmin as string, errors);
    this.validateCelular('celularAdmin', data.celularAdmin as string, errors);
    this.validateSenha('senhaAdmin', data.senhaAdmin as string, errors);
    this.validateDataCadastro('dataCadastroAdmin', data.dataCadastroAdmin as Date, errors);

    // STATUS, Validação específica da entidade Admin
    if (data.statusAdmin === undefined || data.statusAdmin === null || typeof data.statusAdmin !== 'boolean') {
      errors.push('Campo "statusAdmin" é obrigatório e deve ser do tipo booleano (true ou false).');
    }

    // Validação dos relacionamentos
    if (!data.endereco_id || typeof data.endereco_id !== 'number') {
      errors.push('Campo "endereco_id" é obrigatório e deve ser um número válido.');
    }
    if (!data.abrigo_id || typeof data.abrigo_id !== 'number') {
      errors.push('Campo "abrigo_id" é obrigatório e deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  // MÉTODO: CRIAR, chamando validações do metodo validateAdmin, devem ser obrigatorios
  async create(data: Admin): Promise<Admin> {
    this.validateAdmin(data);
    return super.create(data);
  }

  // MÉTODO: ATUALIZAR
  async update(id: number, data: Partial<Admin>): Promise<Admin | null> {
    const errors: string[] = [];

    if ('nomeAdmin' in data) {
      this.validateNome('nomeAdmin', data.nomeAdmin as string, errors);
    }
    if ('emailAdmin' in data) {
      this.validateEmail('emailAdmin', data.emailAdmin as string, errors);
    }
    if ('celularAdmin' in data) {
      this.validateCelular('celularAdmin', data.celularAdmin as string, errors);
    }
    if ('senhaAdmin' in data) {
      this.validateSenha('senhaAdmin', data.senhaAdmin as string, errors);
    }
    if ('dataCadastroAdmin' in data) {
      this.validateDataCadastro('dataCadastroAdmin', data.dataCadastroAdmin as Date, errors);
    }
    if ('statusAdmin' in data && (data.statusAdmin === null || typeof data.statusAdmin !== 'boolean')) {
      errors.push('Campo "statusAdmin" deve ser do tipo booleano (true ou false).');
    }
    if ('endereco_id' in data && typeof data.endereco_id !== 'number') {
      errors.push('Campo "endereco_id" deve ser um número válido.');
    }
    if ('abrigo_id' in data && typeof data.abrigo_id !== 'number') {
      errors.push('Campo "abrigo_id" deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return super.update(id, data);
  }
}
