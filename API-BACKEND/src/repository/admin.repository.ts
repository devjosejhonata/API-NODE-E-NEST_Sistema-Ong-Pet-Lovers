/*
  - Este repositório específico lida com operações da entidade Admin.
  - O AdminRepository é um repositório customizado que estende um repositório genérico (BaseRepository), promovendo reutilização de lógica de acesso a dados.
  - Pode conter métodos específicos da entidade Admin no futuro, além dos já herdados da base.
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Admin } from '../models/admin.model';
import { BaseRepository } from './base.repository';

@Injectable()
export class AdminRepository extends BaseRepository<Admin> {
  constructor(
    @InjectRepository(Admin) // Injeta o repositório da entidade Admin fornecido pelo TypeORM
    adminOrmRepository: Repository<Admin>,
    dataSource: DataSource, 
  ) {
    super(adminOrmRepository, dataSource, 'id_admin'); // Define o nome da chave primária da entidade

  }

}
