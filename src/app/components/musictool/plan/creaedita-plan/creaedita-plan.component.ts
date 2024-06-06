import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, NgIf } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, Router, RouterLink  } from '@angular/router';
import { Plan } from '../../../../model/Plan';
import { PlanService } from '../../../../services/plan.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-creaedita-plan',
  standalone: true,
  imports: [ReactiveFormsModule,
            MatInputModule,
            MatFormFieldModule,
            CommonModule,
            MatNativeDateModule,
            MatSelectModule,
            MatButtonModule,],
  templateUrl: './creaedita-plan.component.html',
  styleUrl: './creaedita-plan.component.css'
})
export class CreaeditaPlanComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  pla:Plan = new Plan();
  edicion:boolean=false;
  id: number = 0;
  //validaciones de selectores de las opciones 
  nameplan: { value: string; viewValue: string }[] = [
    { value: 'Basico', viewValue: 'Basico' },
    { value: 'Premiun', viewValue: 'Premiun'},
  ];
  precioplan: { value: string; viewValue: string }[] = [
    { value: '0', viewValue: '0' },
    { value: 's/.20', viewValue: 's/.20' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private planServices:PlanService,
    private router:Router,
    private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => { 
        this.id = data['id'];
        this.edicion = data['id']!=null;
        this.init();
      });
      this.form =this.formBuilder.group({
        nombreplan:['', Validators.required],
        precioplan:['', Validators.required],
         //validación de max y min
         descripcion:['', Validators.required],
         codigo:['', Validators.required],
      });
    }

    registrar(): void {
      if (this.form.valid) {
        this.pla.planName=this.form.value.codigo
        this.pla.planName=this.form.value.nombreplan
        this.pla.planPrice=this.form.value.precioplan
        this.pla.planDescription=this.form.value.descripcion
        this.planServices.insertar(this.pla).subscribe((data)=>{
          this.planServices.list().subscribe((data)=>{
            this.planServices.setList(data)
          })
        })
        this.router.navigate(['musictool/plans'])
      }
    }

    init() {
      if (this.edicion) {
        this.planServices.listId(this.id).subscribe((data) => {
          this.form = new FormGroup({
            codigo: new FormControl(data.id),
            nombreplan: new FormControl(data.planName),
            precioplan: new FormControl(data.planPrice),
            descripcion: new FormControl(data.planDescription),
          });
        });
      }
    }

}
