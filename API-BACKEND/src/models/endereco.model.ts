/*
  - Esse arquivo tem como objetivo armazenar modelos de dados da entidade Endereco, ou seja, a representação da entidade no banco de dados. 
  - Aqui, sera definido a classe que representa a entidade da aplicação (Endereco).
*/
export class Endereco { 
  
  id_endereco: number; estado: string; cidade: string; bairro: string; rua: string; numeroCasa: string;

  constructor(
    id_endereco: number,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numeroCasa: string
  ) {
    this.id_endereco = id_endereco;
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numeroCasa = numeroCasa;
  }
}
