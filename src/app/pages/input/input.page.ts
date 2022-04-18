import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../dados.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  users: any;
  login: string;
  senha: string;
  mensagem: string = '';
  benvindo: any;

  constructor(dadosServ: DadosService ) {
    this.users = dadosServ.users;
  }

  ngOnInit() {
  }

  entrar(campoLogin, campoSenha) {
    this.login = campoLogin;
    this.senha = campoSenha;
    if (this.login == this.users[0].login && this.senha == this.users[0].senha) {
      this.mensagem = 'Olá ' + this.users[0].nome + ' sua credencial está correta,  seja bem-vindo!';
           
    } else
      this.mensagem = 'Usario ou senha incorretor';
  }

}
