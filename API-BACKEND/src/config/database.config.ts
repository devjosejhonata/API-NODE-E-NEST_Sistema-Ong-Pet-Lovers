import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Endereco } from '../models/endereco.model';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'DESKTOP-QOLSMU3', // ou o IP do servidor SQL
  port: 1433,
  username: 'sa', 
  password: '@sqlserverdevjosejhonata#projetos',
  database: 'PetLoversDB',
  entities: [
    Endereco,
  ],
  synchronize: false, // deixe false em produção
  options: {
    encrypt: false, // necessário para ambientes locais
    trustServerCertificate: true, // evita erro de certificado SSL
  },
};
