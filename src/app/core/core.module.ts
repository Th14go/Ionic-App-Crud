import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../pages/clientes/clientes.service';

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule
  ],
  providers: [
    ClientesService
  ],
  exports: [ ],
})
export class CoreModule { }
