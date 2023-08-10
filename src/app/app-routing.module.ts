import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IdeiaComponent } from './componentes/ideias/ideia/ideia.component';
import { ListarIdeiasComponent } from './componentes/ideias/listar-ideias/listar-ideias.component';
import { CriarIdeiaComponent } from './componentes/ideias/criar-ideia/criar-ideia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarIdeias',
    pathMatch: 'full'
  },
  {
    path: 'listarIdeias',
    component: ListarIdeiasComponent
  },
  {
    path: 'criarIdeia',
    component: CriarIdeiaComponent
  }





]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
