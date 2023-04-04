import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';
import { Tipo } from 'src/app/models/Tipo';
import { CategoriasService } from 'src/app/services/categorias.service';
import { TiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['../listagem-categorias/listagem-categorias.component.scss']
})
export class AtualizarCategoriaComponent implements OnInit {
  nomeCategoria: string;
  categoriaId: number;
  categoria : Observable<Categoria>;
  tipos: Tipo[];
  formulario: any; 
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tiposService: TiposService,
    private categoriasService: CategoriasService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoriaId = params['id'];
    });
    this.categoriaId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.categoriaId);
    this.tiposService.PegarTodos().subscribe(result => {
      this.tipos = result;
    });

    this.categoriasService.PegarCategoriaId(this.categoriaId).subscribe(result => {

      console.log(result)
      this.nomeCategoria = result.nome;
      this.formulario = new FormGroup( {
        categoriaId: new FormControl(result.categoriaId),
        nome: new FormControl(result.nome),
        icone: new FormControl(result.icone),
        tipoId: new FormControl(result.tipoId)
      });
    });
  }
  get propriedade( ) {
    return this.formulario.controls;
  }

  EnviarFormulario() : void {
    const categoria = this.formulario.value;

    this.categoriasService.AtualizarCategoria(this.categoriaId ,categoria).subscribe(resultado => {
      this.router.navigate(['categorias/listagem']);
    });
  }

  VoltarListagem() : void {
    this.router.navigate(['categorias/listagem'])
  }
}
