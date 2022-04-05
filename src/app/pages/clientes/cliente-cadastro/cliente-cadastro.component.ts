import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Clientes } from 'src/app/core/models/clientes.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { Regex } from 'src/app/core/validators/regex.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  regex = new Regex();
  clientes = new Clientes();
  idcli: string;


  constructor(
    private toast: ToastService,
    private clienteService: ClientesService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.idcli = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Cliente');
    if (this.idcli) {
      this.carregarCliente(this.idcli);
    }
    else { }
  }
  carregarCliente(id: string) {
    this.clienteService.getById(id)
      .then(obj => {
        this.clientes = obj;
      })
  }
  get editando() {
    return Boolean(this.clientes.id);
  }
  async onSubmit() {
    try {
     let result: Clientes; 
      if(this.idcli) {
        result =  await this.clienteService.update(this.idcli, this.clientes);
        this.toast.showSucess('Cliente atualizado com sucesso');
      } else {
        result =  await this.clienteService.create(this.clientes);
        this.toast.showSucess('Cliente cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar cliente');

    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Cliente: ${this.clientes.nome}`);
  }
  // salvar(form: NgForm) {
  //   if (this.editando) {
  //     this.atualizar(form);
  //   } else {
  //     this.adicionar(form);
  //   }
  // }
  // adicionar(form: NgForm) {
  //   this.clienteService.adicionar(this.clientes)
  //   .then((obj) => {
  //     this.toast.showSucess('Cliente cadastrado com sucesso');
  //     this.location.back();
  //   })
  //   .catch(error) {
  //     this.toast.showError('Erro ao cadastrar cliente');
  //   }
  // }
  // atualizar(form: NgForm) {
  //   this.motivoService.atualizar(this.motivos)
  //     .then(motivos => {
  //       this.motivos = motivos;
  //       this.messageService.add({ severity: 'info', summary: 'Motivo', detail: `${motivos.descricao}, alterado com sucesso!` });
  //       this.atualizarTituloEdicao();
  //       form.reset();
  //       this.router.navigate(['/motivos']);
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }
}