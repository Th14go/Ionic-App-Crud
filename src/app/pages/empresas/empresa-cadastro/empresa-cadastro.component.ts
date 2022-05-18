import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Empresas } from 'src/app/core/models/empresas.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { EmpresasService } from '../empresas.service';
import { Location } from '@angular/common';
import { GovService } from 'src/app/core/services/gov.service';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css'],
})
export class EmpresaCadastroComponent implements OnInit {

  empresas = new Empresas();
  idemp: string;
  constructor(
    private govService: GovService,
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
    this.title.setTitle(`Edição de Empresa: ${this.empresas.razao_social}`);
  }
  consultaCEP(cep, form) {
    let newCep = cep.model;
    newCep = newCep.replace(/\D/g, '');
    if (newCep !== null && newCep !== '') {
      this.resetaCepForm(form);
      this.govService.consultaCEP(newCep)
        .subscribe((dados) => this.populaCepForm(dados, form));
    }
  }
  populaCepForm(dados, formulario) {
    formulario.form.patchValue({
      logradouro: dados.logradouro.toUpperCase(),
      cep: dados.cep,
      bairro: dados.bairro.toUpperCase(),
      complemento: dados.complemento.toUpperCase(),
      localidade: dados.localidade.toUpperCase(),
      uf: dados.uf.toUpperCase()
    });
  }

  resetaCepForm(formulario) {
    formulario.form.patchValue({
      logradouro: null,
      bairro: null,
      complemento: null,
      localidade: null,
      uf: null
    });
  }

  consultaCNPJ(cnpj, form) {
    let newCnpj = cnpj.model;
    newCnpj = newCnpj.replace(/\D/g, '');
    if (newCnpj !== null && newCnpj !== '') {
      this.resetaCNPForm(form);
      this.govService.consultaCNPJ(newCnpj)
        .subscribe((dados) => this.populaCNPJForm(dados, form));
    }
  }

  populaCNPJForm(dados, formulario) {
    formulario.form.patchValue({
      cnpj: dados.cnpj,
      razao_social: dados.razao_social.toUpperCase(),
      numero: dados.numero,
      ddd_telefone_1: dados.ddd_telefone_1,
      logradouro: dados.logradouro.toUpperCase(),
      cep: dados.cep,
      bairro: dados.bairro.toUpperCase(),
      complemento: dados.complemento.toUpperCase(),
      uf: dados.uf.toUpperCase()
    });
    this.empresas.localidade = dados.municipio.toUpperCase();
  }
  resetaCNPForm(formulario) {
    formulario.form.patchValue({
      razao_social: null,
      numero: null,
      municipio: null,
      ddd_telefone_1: null,
      logradouro: null,
      cep: null,
      bairro: null,
      complemento: null,
      localidade: null,
      uf: null
    });
  }


  onBlur() {
    alert("input lost focus");
  }
}