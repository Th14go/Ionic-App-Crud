import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { EmpresasService } from '../empresas.service';


@Component({
  selector: 'app-empresas-lista',
  templateUrl: './empresas-lista.component.html',
  styleUrls: ['./empresas-lista.component.css'],
})
export class EmpresasListaComponent implements OnInit {

  empresas: any[] = [];

  constructor(
    private empresaService: EmpresasService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit(
  ) {
    this.carregarLista();
  }

  carregarLista() {
    this.empresaService.getAll()
      .then(obj => {
        this.empresas = obj;
      })
  }
  remove(empresas: any) {
    this.alert.showConfirmDelete(empresas.cnpj, () => this.executeRemove(empresas));
  }

  executeRemove(emp: any){
    try {
      const index = this.empresas.indexOf(emp);
      this.empresas.splice(index, 1);
      this.empresaService.delete(emp.id);

      this.toast.showSucess('Empresa removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o empresa');
    }
  }
}
