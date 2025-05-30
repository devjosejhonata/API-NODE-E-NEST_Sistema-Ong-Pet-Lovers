/*
  - Camada de serviço da entidade Pet.
  - Estende a lógica genérica de BaseService para reutilizar operações padrão.
  - Adiciona validações específicas da entidade antes de criar ou atualizar registros.
*/

import { Injectable, BadRequestException } from '@nestjs/common';
import { BaseService } from './base.service';
import { Pet } from '../models/pet.model';
import { PetRepository } from '../repository/pet.repository';

@Injectable()
export class PetService extends BaseService<Pet> {
  constructor(petRepository: PetRepository) {
    super(petRepository);
  }

  // METODO PARA POST: Validações obrigatórias para POST em Pet:
  private validatePet(data: any): void {
    const errors: string[] = [];

    /* Validações reutilizáveis do BaseService */
    this.validateNome('nomePet', data.nomePet as string, errors);
    this.validateDataCadastro('dataCadastroPet', data.dataCadastroPet as Date, errors);
    this.validateDataNascimento('dataNascimentoPet', data.dataNascimentoPet as Date, errors);

    /* Validações específicas da entidade Pet */
    if (!data.raca || typeof data.raca !== 'string' || data.raca.trim().length < 2) {
      errors.push('Campo "raca" é obrigatório e deve conter ao menos 2 caracteres.');
    }

    if (!data.porte || typeof data.porte !== 'string' || data.porte.trim().length < 3) {
      errors.push('Campo "porte" é obrigatório e deve conter ao menos 3 caracteres.');
    }

    if (!data.statusAdocao || typeof data.statusAdocao !== 'string' || !['disponivel', 'adotado'].includes(data.statusAdocao.toLowerCase())) {
    errors.push('Campo "statusAdocao" é obrigatório e deve ser "disponivel" ou "adotado".');
    }

    if (!data.identidadePet || typeof data.identidadePet !== 'string' || data.identidadePet.trim().length < 7) {
      errors.push('Campo "identidadePet" é obrigatório e deve conter ao menos 7 caracteres.');
    }

    if (!data.descricaoPet || typeof data.descricaoPet !== 'string' || data.descricaoPet.trim().length < 5) {
      errors.push('Campo "descricaoPet" é obrigatório e deve conter ao menos 5 caracteres.');
    }

    if ('fotoPet' in data && data.fotoPet && (typeof data.fotoPet !== 'string' || !data.fotoPet.startsWith('http'))) {
    errors.push('Campo "fotoPet", se fornecido, deve conter uma URL válida (começando com "http").');
    }

    if (data.dataAdocao && isNaN(new Date(data.dataAdocao).getTime())) {
    errors.push('Campo "dataAdocao", se fornecido, deve ser uma data válida.');
    }

    /* Validações de relacionamento */
    if (!data.abrigo_id || typeof data.abrigo_id !== 'number') {
      errors.push('Campo "abrigo_id" é obrigatório e deve ser um número válido.');
    }

    if (!data.admin_id || typeof data.admin_id !== 'number') {
      errors.push('Campo "admin_id" é obrigatório e deve ser um número válido.');
    }

    if (data.adotante_id && typeof data.adotante_id !== 'number') {
      errors.push('Campo "adotante_id", se fornecido, deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  // METODO: Validação para criar, herdando de validadePet:
  /* Sobrescreve o método create para adicionar validações */
  async create(data: Pet): Promise<Pet> {
    this.validatePet(data);
    return super.create(data);
  }

  // METODO PARA PUT: VALIDAÇÃO PARA ATUALIZAR:
  /* Validaçoes para campos opcionais, somente os campos que foram enviados (parciais) */
  async update(id: number, data: Partial<Pet>): Promise<Pet | null> {
    const errors: string[] = [];

    if ('nomePet' in data) {
      this.validateNome('nomePet', data.nomePet as string, errors);
    }
    if ('dataCadastroPet' in data) {
      this.validateDataCadastro('dataCadastroPet', data.dataCadastroPet as Date, errors);
    }
    if ('dataNascimentoPet' in data) {
      this.validateDataNascimento('dataNascimentoPet', data.dataNascimentoPet as Date, errors);
    }

    if ('raca' in data && (typeof data.raca !== 'string' || data.raca.trim().length < 2)) {
      errors.push('Campo "raca" deve conter ao menos 2 caracteres.');
    }

    if ('porte' in data && (typeof data.porte !== 'string' || data.porte.trim().length < 3)) {
      errors.push('Campo "porte" deve conter ao menos 3 caracteres.');
    }

    if ('statusAdocao' in data && (typeof data.statusAdocao !== 'string' || !['disponivel', 'adotado'].includes(data.statusAdocao.toLowerCase()))) {
    errors.push('Campo "statusAdocao" deve ser "disponivel" ou "adotado".');
    }

    if ('identidadePet' in data && (typeof data.identidadePet !== 'string' || data.identidadePet.trim().length < 7)) {
      errors.push('Campo "identidadePet" deve conter ao menos 7 caracteres.');
    }

    if ('descricaoPet' in data && (typeof data.descricaoPet !== 'string' || data.descricaoPet.trim().length < 5)) {
      errors.push('Campo "descricaoPet" deve conter ao menos 5 caracteres.');
    }

    if ('fotoPet' in data && (typeof data.fotoPet !== 'string' || !data.fotoPet.startsWith('http'))) {
      errors.push('Campo "fotoPet" deve conter uma URL válida (começando com "http").');
    }

    if ('dataAdocao' in data && isNaN(new Date(data.dataAdocao as Date).getTime())) {
      errors.push('Campo "dataAdocao" deve ser uma data válida.');
    }

    if ('abrigo_id' in data && typeof data.abrigo_id !== 'number') {
      errors.push('Campo "abrigo_id" deve ser um número válido.');
    }

    if ('admin_id' in data && typeof data.admin_id !== 'number') {
      errors.push('Campo "admin_id" deve ser um número válido.');
    }

    if ('adotante_id' in data && typeof data.adotante_id !== 'number') {
      errors.push('Campo "adotante_id" deve ser um número válido.');
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return super.update(id, data);
  }
}
