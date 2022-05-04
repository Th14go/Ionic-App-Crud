import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/models/produtos.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css'],
})
export class ProdutosListaComponent implements OnInit {

  produtos = [];
  constructor(
    private produtoService: ProdutosService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.carregarLista();
   }
   carregarLista() {
    this.produtoService.getAll()
      .then(obj => {
        this.produtos = obj;
      })
  }

  remove(produtos: any) {
    this.alert.showConfirmDelete(produtos.descricao, () => this.executeRemove(produtos));
  }

  executeRemove(produto: any){
    try {
      const index = this.produtos.indexOf(produto);
      this.produtos.splice(index, 1);
      this.produtoService.delete(produto.id);

      this.toast.showSucess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }

}
