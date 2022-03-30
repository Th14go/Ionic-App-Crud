import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: any[] = [];
  constructor(
    private clientesService: ClientesService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista() {
    this.clientesService.getAll()
      .then(obj => {
        this.clientes = obj;
      })
  }

  remove(clientes: any) {
    this.alert.showConfirmDelete(clientes.nome, () => this.executeRemove(clientes));
  }

  executeRemove(cliente: any){
    try {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
      this.clientesService.delete(cliente.id);

      this.toast.showSucess('Cliente removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o cliente');
    }
  }
}
