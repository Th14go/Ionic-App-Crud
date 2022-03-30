import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alert: AlertController) { }

  async showConfirmDelete(name: string, actionRemove: () => void) {
    const alertResult = await this.alert.create({
      header: 'Excluir!',
      message: `Deseja excluir o item: ${name}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            actionRemove();
          }
        }
      ]
    });
    alertResult.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }
}
