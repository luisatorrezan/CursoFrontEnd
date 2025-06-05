import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculo/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculoComponent } from './view/painel-curriculo/painel-curriculo.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculos", component: CurriculosComponent},
  {path: "vagas", component: VagasComponent},
  {path: "vaga-listar", component: PainelVagasComponent},
  {path: "curriculo-listar", component: PainelCurriculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
