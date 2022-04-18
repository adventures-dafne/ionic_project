import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home'},
    { title: 'Dados Usuario', url: '/user'},
    { title: 'Login', url: '/input' },
    { title: 'Promoçoes', url: '/promocao' },
    { title: 'Logout', url: 'login'},
  
  ];
  public labels = ['Family', 'Friends'];
  constructor() {}
}
