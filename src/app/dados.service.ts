import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  users: Array<{ id: number, nome: string, login: string, senha: string, email:
 string, img: string, icon: string }>;
  constructor() {
  this.users = [
  { id: 1002, nome: 'Pedro Bernardes Horeia', login: 'pedrobh', senha: '123',
 email: 'pedrobh@teste.com', img: '../assets/mhp.png', icon: 'start' },
  { id: 1006, nome: 'Daniela Joule Rosa', login: 'danijouli', senha: '123',
 email: 'danirosa@teste.com', img: '../assets/dani.png', icon: 'start' }
  ]
  }
 }
