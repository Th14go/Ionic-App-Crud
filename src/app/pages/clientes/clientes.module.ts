import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClientesRoutingModule } from './clientes.routing';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [
    ClienteCadastroComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
