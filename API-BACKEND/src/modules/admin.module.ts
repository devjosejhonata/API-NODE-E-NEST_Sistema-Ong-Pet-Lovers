/*
 - Módulo responsável por encapsular e registrar o AdminController, AdminService e AdminRepository.
 - Permite organização e modularização do código da entidade Admin.
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from '../controllers/admin.controller';
import { AdminService } from '../services/admin.service';
import { AdminRepository } from '../repository/admin.repository';
import { Admin } from '../models/admin.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin, AdminRepository]), // Registra a entidade e o repositório
  ],
  controllers: [
    AdminController, // Registra o controller da entidade Admin
  ],
  providers: [
    AdminService, // Registra o service da entidade Admin
    AdminRepository, // Registra o AdminRepository como provider
  ],
})
export class AdminModule {}
