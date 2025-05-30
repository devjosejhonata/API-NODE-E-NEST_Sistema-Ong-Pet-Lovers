/*
 - Controlador responsável por lidar com as requisições HTTP da entidade Admin.
 - Herda os métodos genéricos de BaseController e injeta o AdminService para as operações.
*/

import { Controller, } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { BaseController } from './base.controller';
import { Admin } from '../models/admin.model';

@Controller('admins') // Define a rota base como /admins

// Estende o controlador base genérico
export class AdminController extends BaseController<Admin> {

  constructor(adminService: AdminService) {
    super(adminService); // Injeta o AdminService no BaseController
  }

}
