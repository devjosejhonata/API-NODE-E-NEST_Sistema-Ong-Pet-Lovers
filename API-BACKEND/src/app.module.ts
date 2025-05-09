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
    //controllers de cada entidade
    //Como o controller de endereço já está no EnderecoModule, ele não precisa ser registrado aqui.
    
  ],
  providers: [
    //Os services estão encapsulados dentro de seus próprios módulos
  ],
})
export class AppModule {}
