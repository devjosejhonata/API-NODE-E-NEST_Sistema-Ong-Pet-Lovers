import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Sistema em Desenvolvimento - ONG Pet Lovers';
  }
}
