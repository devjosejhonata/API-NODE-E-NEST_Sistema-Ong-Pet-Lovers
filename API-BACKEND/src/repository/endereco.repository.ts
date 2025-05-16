
/*
  - Este repositório específico lida com operações da entidade Endereco.
  - Ele estende a funcionalidade genérica provida pelo BaseRepository.
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from '../models/endereco.model';
import { BaseRepository } from './base.repository';

@Injectable() 
export class EnderecoRepository extends BaseRepository<Endereco> {
  constructor(
    @InjectRepository(Endereco) // Injeta o repositório da entidade Endereco fornecido pelo TypeORM
    enderecoOrmRepository: Repository<Endereco>,
  ) {
    super(enderecoOrmRepository, 'id_endereco');// Chama o construtor da classe base, passando o repositório injetado e o nome da chave primária da entidade
  }


  // Adicionar métodos específicos da entidade Endereco, se necessário no futuro.
}
