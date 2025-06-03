import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './src/app.module';

async function bootstrap() { /* função pra iniciar a aplicação nest */
  const app = await NestFactory.create(AppModule);

  // MÉTODO: Habilita CORS para permitir requisições do frontend
  /* Sem isso, navegadores bloqueiam requisições entre origens diferentes por segurança */
  app.enableCors({
    origin: '*', // Em produção, substituir por: ['http://frontend.com'], a pela url específica, ou em desenvolvimento pelo servidor do front, ex http://localhost:8080
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  // SWAGGER CONFIG
  const config = new DocumentBuilder()
    .setTitle('ONG Pet Lovers API')
    .setDescription('Documentação da API para gerenciamento da ONG de pets')
    .setVersion('1.0') /* versão atual da api */
    .addBearerAuth() /* para habilitar JWT na interface do Swagger, para testar rotas protegidas sem precisar abrir o postman */
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); /* --> rota documentação sagger: http://localhost:3000/api */

  const PORT = 3000;
  await app.listen(PORT);
  console.log(`✅ Servidor executando na porta ${PORT}`);
}
bootstrap();/* chamada de inicialização da aplicação */
