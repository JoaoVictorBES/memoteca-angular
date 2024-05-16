import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input () pensamento = {
    conteudo: 'I love angular',
    autoria: 'Xu',
    modelo: 'modelo3'
  }
}
