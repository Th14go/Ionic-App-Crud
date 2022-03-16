import { HttpClient } from '@angular/common/http';
import { ClientesRoutingModule } from './clientes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [
    ClienteCadastroComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
