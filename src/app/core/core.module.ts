import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../pages/clientes/clientes.service';
import { EmpresasService } from '../pages/empresas/empresas.service';

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule
  ],
  providers: [
    ClientesService,
    EmpresasService
  ],
  exports: [ ],
})
export class CoreModule { }
