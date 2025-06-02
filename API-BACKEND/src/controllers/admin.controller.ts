/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Admin.
 - Herda os métodos genéricos de BaseController e injeta o AdminService para as operações.
*/

import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { BaseController } from './base.controller';
import { Admin } from '../models/admin.model';

import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Controller('admins') // Define a rota base como /admins

// Estende o controlador base genérico
export class AdminController extends BaseController<Admin> {

  constructor(adminService: AdminService) {
    super(adminService); // Injeta o AdminService no BaseController
  }

  // Sobrescreve o GET de base.service, todos os admins.
  /* Para tornar a rota GET protegida para dados de Admin*/
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() query: any): Promise<any> {
    return this.service.findAll(query);
  }

  // Sobrescreve o GET por ID de admins em base.service.
  /* Para tornar a rota GET por ID de admins protegida para dados de Admin*/
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.service.findOne(id);
  }

}
