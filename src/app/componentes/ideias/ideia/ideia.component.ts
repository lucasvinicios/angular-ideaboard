import { Component, OnInit, Input } from '@angular/core';
import { Ideia } from '../ideia';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {

  @Input() ideia: Ideia ={
    id: 0,
    ideia: 'Teste',
    descricao: 'Teste de Ideia'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
