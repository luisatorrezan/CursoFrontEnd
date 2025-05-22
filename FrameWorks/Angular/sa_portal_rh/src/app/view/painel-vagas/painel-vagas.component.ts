import { Component } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent {
  public vaga: Vaga = new Vaga(0,"","","",0); //rastrear os dados no formulário por interpolação 

  public vagas: Vaga[] = [];
  //armazenar os dados da api -json

  constructor(private _vagasService: VagasService){} //aplicando o servidor no construtor

  ngOnInit(): void{
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      })
    })
  }

  //listar uma unica vaga

}
