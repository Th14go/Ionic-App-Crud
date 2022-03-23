import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  async showSucess(message: string){
  const toastResult = await this.toast.create({
    message,
    duration: 3000,
    color: 'success',
    position: 'bottom'
  })
   await toastResult.present();
  }

  async showError(message: string){
    const toastResult = await this.toast.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'bottom'
    })
    await  toastResult.present();
    }
}
