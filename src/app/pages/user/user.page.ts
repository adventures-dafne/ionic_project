import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {
  email: string;
  telefone: number;
  message: string = '';

  constructor(public alertController: AlertController) { }

  async apresentarAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Digite seu email',
        },
        {
          name: 'telefone',
          type: 'text',
          id: 'telefone-id',
          placeholder: 'Digite seu telefone'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Enviar',
          handler: (alertData) => {
            this.message = alertData.email +' ' + alertData.telefone;
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(this.alertController, role);
  }

}
