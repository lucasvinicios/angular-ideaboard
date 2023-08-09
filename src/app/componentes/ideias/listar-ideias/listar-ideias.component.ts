import { Component, OnInit } from '@angular/core';
import { Ideia } from '../ideia';

@Component({
  selector: 'app-listar-ideias',
  templateUrl: './listar-ideias.component.html',
  styleUrls: ['./listar-ideias.component.css']
})
export class ListarIdeiasComponent implements OnInit {

  listaIdeias: Ideia[] = []
  // listaIdeias: Ideia[] = [
  // {
  //   id: 0,
  //   ideia: 'Teste',
  //   descricao: 'Teste',
  // },
  // {
  //   id: 0,
  //   ideia: 'Teste',
  //   descricao: 'Teste',
  // },
// ]

  constructor() { }

  ngOnInit(): void {
  }

  listarIdeias(){

  }

}
