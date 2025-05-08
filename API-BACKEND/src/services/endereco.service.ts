/*
 - Camada de serviço da entidade Endereco.
 - Estende a lógica genérica de BaseService para reutilizar as operações padrão.
*/

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Endereco } from '../models/endereco.model';

@Injectable()
export class EnderecoService extends BaseService<Endereco> {
  // Adicionar métodos específicos da entidade Endereco
}
