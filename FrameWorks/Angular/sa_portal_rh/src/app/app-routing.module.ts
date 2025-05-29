import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculo", component: CurriculoComponent},
  {path: "vagas", component: VagasComponent},
  {path: "vaga-listar", component: PainelVagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
