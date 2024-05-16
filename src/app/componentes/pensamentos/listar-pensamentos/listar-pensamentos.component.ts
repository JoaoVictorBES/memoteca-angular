import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css'
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Xu',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Passo informaçoes para o compnente filho',
      autoria: 'componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input()',
      autoria: 'componente filho',
      modelo: 'modelo1'
    }
  ]
}
