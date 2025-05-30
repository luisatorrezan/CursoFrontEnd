export class Curriculo{

constructor(
  public cpf: number,
  public nome: string,
  public idade: number,
  public formacao: string
){}

ToMap(): {[key:string]:any}{
  return{
    cpf: this.cpf,
    nome: this.nome,
    idade: this.idade,
    formacao: this.formacao
  }
}

//fromMap api -> obj
 static fromMap(map:any):Curriculo{
    return new Curriculo(
      map.cpf,
      map.nome,
      map.idade,
      map.formacao
    )
  }
}