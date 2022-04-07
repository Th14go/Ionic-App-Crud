import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriasListaComponent
  },
  {
    path: 'novo',
    component: CategoriaCadastroComponent
  },
  {
    path: ':id',
    component: CategoriaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasRoutingModule {}
