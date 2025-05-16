/*
 - Camada de serviço da entidade Endereco.
 - Estende a lógica genérica de BaseService para reutilizar as operações padrão.
*/

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Endereco } from '../models/endereco.model';
import { EnderecoRepository } from '../repository/endereco.repository';

@Injectable()
export class EnderecoService extends BaseService<Endereco> {
  constructor(enderecoRepository: EnderecoRepository) {
    super(enderecoRepository);
  }

  // Adicionar métodos específicos da entidade Endereco, se necessário
}
