import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtistService } from '../../../../services/artist.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { artist } from '../../../../model/Artist';


@Component({
  selector: 'app-list-artist',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './list-artist.component.html',
  styleUrl: './list-artist.component.css'
})

  export class ListArtistComponent implements OnInit {
    displayedColumns: string[] = [
      'codigo',
      'disponibilidad',
      'nombre',
      'descripcion'
    ];
    dataSource: MatTableDataSource<artist> = new MatTableDataSource();
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(private ArtistService: ArtistService) { }
  
    ngOnInit(): void {
      this.ArtistService.list().subscribe((data) => {
        this.dataSource  = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
      this.ArtistService.getList().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

