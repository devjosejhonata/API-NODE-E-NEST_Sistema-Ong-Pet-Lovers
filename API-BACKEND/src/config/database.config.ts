import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Endereco } from '../models/endereco.model';
import { Abrigo } from '../models/abrigo.model';
import { Admin } from '../models/admin.model';
import { Adotante } from '../models/adotante.model';
import { Pet } from '../models/pet.model';

// ADICIONAR AQUI OS DADOS DE CONEXÃO COM BANCO
/* removi meus dados reais de conexao só para fins de compartilhar no repositorio como eu fiz a configuraçao, para rodar o projeto, necessario adicionar...*/
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: '', 
  port: 1433,
  username: 'sa', 
  password: '',
  database: 'PetLoversDB',
  entities: [
    Endereco,
    Abrigo,
    Admin,
    Adotante, 
    Pet
  ],
  synchronize: false, // deixe false em produção
  options: {
    encrypt: false, // necessário para ambientes locais
    trustServerCertificate: true, // evita erro de certificado SSL
  },
};
