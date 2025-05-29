import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent {
  public curriculo: Curriculo[] = [];

  constructor(private _curriculoService:CurriculoService){}

  ngOnInit(): void{
    this.listarCurriculo();
  }

  listarCurriculo() {
    this._curriculoService.getCurriculo().subscribe(
      (retornaCurriculo) => {
        this.curriculo = retornaCurriculo.map(
          (item) => {
            return new Curriculo(
              item.cpf,
              item.nome,
              item.idade,
              item.formacao,
            );
          }
        );
      }
    )
  }
}

