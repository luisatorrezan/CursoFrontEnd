export class Vaga{
//   //atributos
//   id: number = 0;
//   nome: string = "";
//   foto: string = "";
//   descricao: string = "";
//   salario: number = 0;

//   constructor(id:number, nome:string, foto:string, descricao:string, salario:number){
//     this.id = id,
//     this.nome = nome;
//     this.foto = foto;
//     this.descricao = descricao;
//     this.salario = salario
//   }

constructor(
  public id: number,
  public nome: string,
  public foto: string,
  public descricao: string,
  public salario: number
){}

//   //getter and setters
//   getId(): number{
//     return this.id;
//   }
//   setId(id:number): void{
//     this.id = id
//   }

//toMap obj -> api
ToMap(): {[key:string]:any}{
  return{
    id: this.id,
    nome: this.nome,
    foto: this.foto,
    descricao: this.descricao,
    salario: this.salario
  }
}

//fromMap api -> obj
 static fromMap(map:any):Vaga{
    return new Vaga(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    )
  }
}