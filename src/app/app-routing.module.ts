import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentosComponent } from './componentes/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },

  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  },

  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },

  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentosComponent
  },

  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
