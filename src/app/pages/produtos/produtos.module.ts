import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { ProdutosRoutingModule } from './produtos.routing';



@NgModule({
  declarations: [
    ProdutoCadastroComponent,
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
