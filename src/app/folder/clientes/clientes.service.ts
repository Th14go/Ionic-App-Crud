import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from 'src/app/core/models/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = 'https://60d49dd961160900173cbbb9.mockapi.io/v1/clientes';
  }

  getAll() {
    return this.http.get<any>(`${this.apiURL}`)
      .toPromise()
      //.then(res => res.data as Clientes[])
      // .then(data => data);
      .then(response => response);
  }
}
