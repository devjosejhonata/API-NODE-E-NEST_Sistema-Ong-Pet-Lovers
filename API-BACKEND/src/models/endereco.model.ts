
/*
  - Esse arquivo tem como objetivo armazenar modelos de dados da entidade Endereco, ou seja, a representação da entidade no banco de dados. 
  - Aqui, será definida a classe que representa a entidade da aplicação (Endereco), com suporte ao TypeORM.
*/

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Endereco' }) 
export class Endereco {
  @PrimaryGeneratedColumn({ name: 'id_endereco' })
  id_endereco!: number;

  @Column({ type: 'char', length: 2 })
  estado!: string;

  @Column({ type: 'varchar', length: 100 })
  cidade!: string;

  @Column({ type: 'varchar', length: 100 })
  bairro!: string;

  @Column({ type: 'varchar', length: 150 })
  rua!: string;

  @Column({ type: 'varchar', length: 10 }) 
  numeroCasa!: string;
}
