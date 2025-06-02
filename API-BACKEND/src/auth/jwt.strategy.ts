/*
  - Estratégia de autenticação JWT que valida o token enviado nas requisições protegidas.
  - Extrai o payload do token e o injeta no `Request.user`.
*/

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), /* --> Extrai o token do header Authorization: Bearer <token> */
      ignoreExpiration: false, /* --> Rejeita tokens expirados */
      secretOrKey: 'seu_jwt_secreto', /* --> Quando for usar: Mesmo segredo usado no AuthModule */
    });
  }

  async validate(payload: any) {

    return { userId: payload.sub, email: payload.email }; /* --> Retorna o conteúdo decodificado do token (payload), acessível via req.user */
    
  }
}
