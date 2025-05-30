/*
  - Este arquivo representa o modelo de dados da entidade Pet.
  - Define a estrutura da tabela Pet no banco de dados e seus relacionamentos.
  - Cada Pet está relacionado a um Abrigo (N:1), um Admin (N:1) e opcionalmente a um Adotante (N:1).
*/

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Abrigo } from './abrigo.model';
import { Adotante } from './adotante.model';
import { Admin } from './admin.model';

@Entity({ name: 'Pet' })
export class Pet {
  @PrimaryGeneratedColumn({ name: 'id_pet' })
  id_pet!: number;

  @Column({ type: 'varchar', length: 100 })
  nomePet!: string;

  @Column({ type: 'varchar', length: 50 })
  raca!: string;

  @Column({ type: 'varchar', length: 30 })
  porte!: string;

  @Column({ type: 'date' })
  dataNascimentoPet!: Date;

  @Column({ type: 'varchar', length: 20 })
  statusAdocao!: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  identidadePet!: string;

 @Column({ type: 'varchar', length: 'MAX' }) 
  descricaoPet!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fotoPet?: string;

  @CreateDateColumn({ type: 'datetime', name: 'dataCadastroPet', default: () => 'GETDATE()', })
  dataCadastroPet!: Date;

  @Column({ type: 'date', nullable: true })
  dataAdocao?: Date;

  @ManyToOne(() => Abrigo)
  @JoinColumn({ name: 'abrigo_id' })
  abrigo_id!: Abrigo;

  @ManyToOne(() => Adotante, { nullable: true })
  @JoinColumn({ name: 'adotante_id' })
  adotante_id?: Adotante;

  @ManyToOne(() => Admin)
  @JoinColumn({ name: 'admin_id' })
  admin_id!: Admin;
}
