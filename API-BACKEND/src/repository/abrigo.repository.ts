/*
  - Este repositório específico lida com operações da entidade Abrigo.
  - O AbrigoRepository é um repositório customizado que estende um repositório genérico, promovendo reutilização de lógica de acesso a dados.
  - Ele estende a funcionalidade genérica provida pelo BaseRepository.
  - Pode conter métodos específicos da entidade Abrigo no futuro, além dos já herdados da base.
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Abrigo } from '../models/abrigo.model';
import { BaseRepository } from './base.repository';

@Injectable()
export class AbrigoRepository extends BaseRepository<Abrigo> {
  constructor(
    @InjectRepository(Abrigo) // Injeta o repositório da entidade Abrigo fornecido pelo TypeORM
    abrigoOrmRepository: Repository<Abrigo>,
    dataSource: DataSource, 
  ) {
    super(abrigoOrmRepository, dataSource, 'id_abrigo'); // Chama o construtor da classe base, passando o repositório injetado e o nome da chave primária da entidade

    this.relations = ['endereco_id'];// Define as relações que devem ser carregadas automaticamente (relação com endereco)
  }

  // Adicionar métodos específicos da entidade Abrigo, se necessário no futuro.
  
}
