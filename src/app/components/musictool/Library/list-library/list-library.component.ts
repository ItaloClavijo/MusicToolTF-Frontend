import { Component, OnInit, ViewChild } from '@angular/core';
import { Library } from '../../../../model/Library';
import { LibraryService } from '../../../../services/library.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-list-library',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './list-library.component.html',
  styleUrl: './list-library.component.css'
})
export class ListLibraryComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'disponibilidad',
    'nombre',
    'descripcion'
  ];
  dataSource: MatTableDataSource<Library> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.libraryService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}