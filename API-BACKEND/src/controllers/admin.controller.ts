/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Admin.
 - Herda os métodos genéricos de BaseController e injeta o AdminService para as operações.
 - Inclui suporte à paginação e filtros opcionais para busca de registros.
*/

import { Controller, Get, Query } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { BaseController } from './base.controller';
import { Admin } from '../models/admin.model';

@Controller('admins') // Define a rota base como /admins

// Estende o controlador base genérico
export class AdminController extends BaseController<Admin> {

  constructor(private readonly adminService: AdminService) {
    super(adminService); // Injeta o AdminService no BaseController
  }

  // Paginação. Utiliza a rota única /admins para listar admins com paginação e filtros opcionais
  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('nomeAdmin') nomeAdmin?: string,
    @Query('emailAdmin') emailAdmin?: string,
    @Query('celularAdmin') celularAdmin?: string,
    @Query('statusAdmin') statusAdmin?: string, // Recebe como string, mas será convertido
    @Query('dataCadastroAdmin') dataCadastroAdmin?: string, // Formato: yyyy-mm-dd
  ) {
    const filters: any = {};
    if (nomeAdmin) filters.nomeAdmin = nomeAdmin;
    if (emailAdmin) filters.emailAdmin = emailAdmin;
    if (celularAdmin) filters.celularAdmin = celularAdmin;
    if (statusAdmin !== undefined) filters.statusAdmin = statusAdmin === 'true';
    if (dataCadastroAdmin) filters.dataCadastroAdmin = new Date(dataCadastroAdmin);

    return this.adminService.paginate(Number(page), Number(limit), filters);
  }
}
