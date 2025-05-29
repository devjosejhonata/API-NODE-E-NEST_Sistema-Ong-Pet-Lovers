/*
  - Esse arquivo tem como objetivo armazenar modelos de dados da entidade Abrigo, ou seja, a representação da entidade no banco de dados.
  - Aqui, será definida a classe que representa a entidade da aplicação (Abrigo), com suporte ao TypeORM.
  - O Abrigo possui um relacionamento 1:1 com Endereco e relacionamentos 1:N com Admin e Pet.
*/

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Endereco } from './endereco.model';

@Entity({ name: 'Abrigo' })
export class Abrigo {
  @PrimaryGeneratedColumn({ name: 'id_abrigo' })
  id_abrigo!: number;

  @Column({ type: 'varchar', length: 100 })
  nomeAbrigo!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  emailAbrigo!: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  celularAbrigo!: string;

  @OneToOne(() => Endereco) 
  @JoinColumn({ name: 'endereco_id' })
  endereco_id!: Endereco;
}

