import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Plan } from '../../../../model/Plan';
import { PlanService } from '../../../../services/plan.service';
@Component({
  selector: 'app-list-plan',
  standalone: true,
  imports: [MatTableModule,
            MatPaginatorModule,
  ],
  templateUrl: './list-plan.component.html',
  styleUrl: './list-plan.component.css'
})
export class ListPlanComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombrePlan',
    'precioPlan',
    'descripcionPlan',
  ];
  dataSource: MatTableDataSource<Plan> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private planService: PlanService) { }
  ngOnInit(): void {
    this.planService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.planService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
