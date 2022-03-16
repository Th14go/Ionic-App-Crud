import { Clientes } from 'src/app/core/models/clientes.model';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes = [];
  constructor(
    private clientesService: ClientesService,
  ) { }

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista(){
    this.clientesService.getAll()
   .then(obj => {
     this.clientes = obj;
     console.log(this.clientes);
     console.log(obj);
   })
  }
}
