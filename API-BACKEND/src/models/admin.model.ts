/*
  - Este arquivo representa o modelo de dados da entidade Admin.
  - Define a estrutura da tabela Admin no banco de dados e seus relacionamentos.
  - Cada Admin está relacionado a um Endereco (1:1) e a um Abrigo (N:1).
*/

import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, CreateDateColumn} from 'typeorm';
import { Endereco } from './endereco.model';
import { Abrigo } from './abrigo.model';

@Entity({ name: 'Admin' })
export class Admin {
  @PrimaryGeneratedColumn({ name: 'id_admin' })
  id_admin!: number;

  @Column({ type: 'varchar', length: 100 })
  nomeAdmin!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  emailAdmin!: string;

  @Column({ type: 'varchar', length: 255 })
  senhaAdmin!: string;

  @Column({ type: 'bit' })
  statusAdmin!: boolean;

  @Column({ type: 'varchar', length: 20, unique: true })
  celularAdmin!: string;

  @CreateDateColumn({ type: 'datetime', name: 'dataCadastroAdmin', default: () => 'GETDATE()' })
  dataCadastroAdmin!: Date;

  @OneToOne(() => Endereco)
  @JoinColumn({ name: 'endereco_id' })
  endereco_id!: Endereco;

  @ManyToOne(() => Abrigo) 
  @JoinColumn({ name: 'abrigo_id' })
  abrigo_id!: Abrigo;

  toJSON() { //para ocultar o campo senha dos relacionamentos aninhados
    const { senhaAdmin, ...rest } = this;
    return rest;
  }
}
