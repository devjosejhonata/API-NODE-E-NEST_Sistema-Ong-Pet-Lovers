/*
  - Esse arquivo é o módulo raiz da aplicação e vai importar os outros módulos (controllers, services, etc.).
*/
import { Module } from '@nestjs/common';
import { EnderecoModule } from './modules/endereco.module'; // importa o módulo de endereço

@Module({
  imports: [
    EnderecoModule, // importa o módulo de endereço
  ],
  controllers: [
    //controllers de cada entidade:
    
  ],
  providers: [],
})
export class AppModule {}
