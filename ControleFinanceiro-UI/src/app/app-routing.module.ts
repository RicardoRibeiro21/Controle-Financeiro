import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListagemCategoriasComponent } from './components/categoria/listagem-categorias/listagem-categorias.component';
import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';

const routes: Routes = [{
  path: 'categorias/listagem', component: ListagemCategoriasComponent  
}, {
  path: 'categorias/novacategoria', component: NovaCategoriaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
