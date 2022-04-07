import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';


@NgModule({
  declarations: [
    CategoriasListaComponent,
    CategoriaCadastroComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
