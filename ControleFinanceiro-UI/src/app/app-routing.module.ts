import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListagemCategoriasComponent } from './components/categoria/listagem-categorias/listagem-categorias.component';

const routes: Routes = [{
  path: 'categorias/listagem', component: ListagemCategoriasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
