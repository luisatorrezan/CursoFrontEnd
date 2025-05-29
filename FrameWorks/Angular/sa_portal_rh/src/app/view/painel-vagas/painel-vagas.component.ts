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
  listarVagaUnica(vaga:Vaga){
    //função para listar vagaunica, para edição no formulário
    this.vaga = vaga;
    //a vaga clicada é mostrada no formulário
  }

  //cadastrar vaga
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0); //limpar os campos do formulário
        this.listarVagas();
        alert("Vaga Cadastrada com Sucesso");
      }, (err) => { console.error("Exception: ", err);}
    );
  }

  //atualizar vagas
  atualizar(id:any){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
        alert("Vaga Atualizada com Sucesso!!!")
      }, (err) => {console.error("Exception: ", err);}
    );
  }

  //deletar vaga
  excluir(id:any){
    this._vagasService.removerVaga(id).subscribe(
      ()=>{
        this.listarVagas();
        alert("Vaga Deletada com Sucesso!!!");
      }, (err) => {console.error("exception: ", err);}
    );
  }

}
