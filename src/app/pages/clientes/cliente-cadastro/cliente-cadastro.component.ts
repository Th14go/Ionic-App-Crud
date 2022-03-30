import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from 'src/app/core/models/clientes.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  title: 'Cliente Cadastro';
  id: string;
  cliente = new Clientes();

  constructor(
    private toast: ToastService,
    private clienteService: ClientesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  carregarCliente(id: number) {
    this.clienteService.getById(id)
      .then(obj => {
        this.cliente = obj;
      })
  }
}