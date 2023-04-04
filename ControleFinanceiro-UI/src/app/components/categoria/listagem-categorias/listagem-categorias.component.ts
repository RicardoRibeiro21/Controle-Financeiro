import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagem-categorias',
  templateUrl: './listagem-categorias.component.html',
  styleUrls: ['./listagem-categorias.component.scss']
})
export class ListagemCategoriasComponent implements OnInit {
  categorias = new MatTableDataSource<any> ();
  displayedColumns: string[];

  constructor(private categoriasService: CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoriasService.PegarTodos().subscribe(result => {
      this.categorias.data = result;
    });

    this.displayedColumns = this.ExibirColunas();
  }

  ExibirColunas(): string[] {
    return ['nome', 'icone', 'tipo', 'acoes'];
  }
  ExcluirCategoria(categoriaId: number) :void {
    this.categoriasService.ExcluirCategoria(categoriaId).subscribe(result => {
      this.router.navigate(['categorias/listagem']);
    });
  }
}
