/*
  - Guardião de rotas que utiliza a estratégia JWT para proteger endpoints.
  - Deve ser aplicado via decorator @UseGuards() nas rotas desejadas.
*/

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  // Metodos aqui, quando necessário. 
}
