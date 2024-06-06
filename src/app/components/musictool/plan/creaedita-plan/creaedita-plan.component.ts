import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Plan } from '../../../../model/Plan';
import { PlanService } from '../../../../services/plan.service';
@Component({
  selector: 'app-creaedita-plan',
  standalone: true,
  imports: [ReactiveFormsModule,
            MatInputModule,
            MatFormFieldModule,
            CommonModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSelectModule,
            MatButtonModule,],
  templateUrl: './creaedita-plan.component.html',
  styleUrl: './creaedita-plan.component.css'
})
export class CreaeditaPlanComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  pla:Plan = new Plan();
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
    private router:Router){}

    ngOnInit(): void {
      this.form =this.formBuilder.group({
        nombreplan:['', Validators.required],
        precioplan:['', Validators.required],
         //validación de max y min
         descripcion:['', Validators.required],
      });
    }

    registrar(): void {
      if (this.form.valid) {
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

}
