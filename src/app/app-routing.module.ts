import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home/:id',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  // },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then( m => m.EmpresasModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules}, )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
