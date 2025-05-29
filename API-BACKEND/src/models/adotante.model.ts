/*
  - Este arquivo representa o modelo de dados da entidade Adotante.
  - Define a estrutura da tabela Adotante no banco de dados e seu relacionamento com Endereco.
  - Cada Adotante está relacionado a um Endereco (1:1).
*/

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn} from 'typeorm';
import { Endereco } from './endereco.model';

@Entity({ name: 'Adotante' })
export class Adotante {
  @PrimaryGeneratedColumn({ name: 'id_adotante' })
  id_adotante!: number;

  @Column({ type: 'varchar', length: 100 })
  nomeAdotante!: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  emailAdotante!: string;

  @Column({ type: 'varchar', length: 255 })
  senhaAdotante!: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  rgAdotante!: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  celularAdotante!: string;

  @CreateDateColumn({ type: 'datetime', name: 'dataCadastroAdotante', default: () => 'GETDATE()', })
  dataCadastroAdotante!: Date;

  @OneToOne(() => Endereco) 
  @JoinColumn({ name: 'endereco_id' })
  endereco_id!: Endereco;
}
