import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Clientes', url: 'clientes', icon: 'people' },
    { title: 'Empresas', url: 'empresas', icon: 'business' },
    { title: 'Categorias', url: 'categorias', icon: 'document-text' },
    { title: 'Produtos', url: 'produtos', icon: 'file-tray-stacked' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
