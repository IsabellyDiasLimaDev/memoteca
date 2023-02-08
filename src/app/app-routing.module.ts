import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pensamentos/listar',
    pathMatch: 'full'
  },
  {
    path: 'pensamentos/criar',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos/listar',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluir/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editar/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
