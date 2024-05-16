import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent {

  pensamento = {
    id:'1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: ''
  }

  criarPensamento () {
    alert("Novo pensamento criado")
  }

  cancelarPensamento() {
    alert ("Pensamento cancelado")
  }
}
