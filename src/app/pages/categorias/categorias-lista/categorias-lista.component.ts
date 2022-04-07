import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.css'],
})
export class CategoriasListaComponent implements OnInit {

  categorias: any[] = [];
  constructor(
    private categoriaService: CategoriasService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.carregarLista();
   }


  carregarLista() {
    this.categoriaService.getAll()
      .then(obj => {
        this.categorias = obj;
      })
  }

  remove(categorias: any) {
    this.alert.showConfirmDelete(categorias.nome, () => this.executeRemove(categorias));
  }

  executeRemove(categoria: any){
    try {
      const index = this.categorias.indexOf(categoria);
      this.categorias.splice(index, 1);
      this.categoriaService.delete(categoria.id);

      this.toast.showSucess('Categoria removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o categoria');
    }
  }
}
