import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosListaComponent
  },
  {
    path: 'novo',
    component: ProdutoCadastroComponent
  },
  {
    path: ':id',
    component: ProdutoCadastroComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
