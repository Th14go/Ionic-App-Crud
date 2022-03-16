import { ClientesService } from './../folder/clientes/clientes.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
