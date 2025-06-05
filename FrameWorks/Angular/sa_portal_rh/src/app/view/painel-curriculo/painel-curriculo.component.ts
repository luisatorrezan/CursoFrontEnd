import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-painel-curriculo',
  templateUrl: './painel-curriculo.component.html',
  styleUrls: ['./painel-curriculo.component.scss'],
})
export class PainelCurriculoComponent {
  public curriculo: Curriculo = new Curriculo(0, 0, '', 0, ''); //rastrear os dados no formulário por interpolação

  public curriculos: Curriculo[] = [];
  //armazenar os dados da api -json

  constructor(private _curriculoService: CurriculoService) {} //aplicando o servidor no construtor

  ngOnInit(): void {
    this.listarCurriculo();
  }

  listarCurriculo() {
    this._curriculoService.getCurriculo().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        return new Curriculo(item.id, item.cpf, item.nome, item.idade, item.formacao);
      });
    });
  }

  //listar uma unica vaga
  listarCurriculoUnico(curriculo: Curriculo) {
    //função para listar vagaunica, para edição no formulário
    this.curriculo = curriculo;
    //a vaga clicada é mostrada no formulário
  }

  //cadastrar vaga
  cadastrar() {
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, 0, '', 0, ''); //limpar os campos do formulário
        this.listarCurriculo();
        alert('Curriculo Cadastrado com Sucesso');
      },
      (err) => {
        console.error('Exception: ', err);
      }
    );
  }

  //atualizar vagas
  atualizar(id: any) {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, 0, '', 0, '');
        this.listarCurriculo();
        alert('Curriculo Atualizado com Sucesso!!!');
      },
      (err) => {
        console.error('Exception: ', err);
      }
    );
  }

  excluir(id: number) {
    this._curriculoService.removerCurriculo(id).subscribe(
      () => {
        this.listarCurriculo();
        alert('Vaga Deletada com Sucesso!!!');
      },
      (err) => {
        console.error('exception: ', err);
      }
    );
  }
}
