import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = 3000;
  await app.listen(PORT);
  console.log(`✅ Servidor executando na porta ${PORT}`);
}
bootstrap();
