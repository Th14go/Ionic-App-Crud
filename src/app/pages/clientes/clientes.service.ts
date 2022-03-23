import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from 'src/app/core/models/clientes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    // forma hardcode
    // this.apiURL = 'https://60d49dd961160900173cbbb9.mockapi.io/v1/clientes';
    this.apiURL = `${environment.apiUrl}/clientes`;
  }

  getAll() {
    return this.http.get<any>(`${this.apiURL}`)
      .toPromise()
      .then(response => response);
  }
  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`).toPromise();
  }
}
