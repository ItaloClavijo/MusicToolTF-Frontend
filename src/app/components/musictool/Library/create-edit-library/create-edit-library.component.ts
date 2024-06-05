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
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Library } from '../../../../model/Library';
import { LibraryService } from '../../../../services/library.service';

@Component({
  selector: 'app-create-edit-library',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule],
  templateUrl: './create-edit-library.component.html',
  styleUrl: './create-edit-library.component.css'
})
export class CreateEditLibraryComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  icMinFecha: Date = moment().add(+1, 'days').toDate();
  library : Library = new Library();

  disponible: { value: boolean; viewValue: string }[] = [
    { value: true, viewValue: 'Publica' },
    { value: false, viewValue: 'Privada' },
  ];

  constructor(private formBuilder: FormBuilder,
    private libraryService: LibraryService,
    private router:Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      disponible: ['', Validators.required],
      nombre: ['',Validators.required],
      descripcion: ['', Validators.required],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.library.libraryAvailable=this.form.value.disponible
      this.library.libraryName=this.form.value.nombre
      this.library.libraryDescription=this.form.value.descripcion
      this.library.usersId=undefined;
  
      this.libraryService.insert(this.library).subscribe((data)=>{
        this.libraryService.list().subscribe((data)=>{
          this.libraryService.setList(data)
        })
      })
      this.router.navigate(['musictool/library/list'])
    }
  }
}
