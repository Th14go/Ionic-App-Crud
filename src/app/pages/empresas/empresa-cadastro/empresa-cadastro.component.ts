import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Empresas } from 'src/app/core/models/empresas.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { EmpresasService } from '../empresas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css'],
})
export class EmpresaCadastroComponent implements OnInit {

  empresas = new Empresas();
  idemp: string;
  constructor(
    private toast: ToastService,
    private empresaService: EmpresasService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.idemp = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Empresa');
    if (this.idemp) {
      this.carregarEmpresa(this.idemp);
    }
    else { }
  }
  carregarEmpresa(id: string) {
    this.empresaService.getById(id)
      .then(obj => {
        this.empresas = obj;
      })
  }
  get editando() {
    return Boolean(this.empresas.id);
  }
  async onSubmit() {
    try {
      let result: Empresas;
      if (this.idemp) {
        result = await this.empresaService.update(this.idemp, this.empresas);
        this.toast.showSucess('Empresa atualizado com sucesso');
      } else {
        result = await this.empresaService.create(this.empresas);
        this.toast.showSucess('Empresa cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar empresa');

    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Empresa: ${this.empresas.razaoSocial}`);
  }
}