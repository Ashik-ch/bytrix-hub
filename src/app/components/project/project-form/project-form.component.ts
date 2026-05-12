import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {

  form = this.fb.group({
    name: ['', Validators.required],
    payment: [null, Validators.required],
    date: ['', Validators.required],
    status: ['Pending', Validators.required],
    notes: ['']
  });

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  submit() {
    if (this.form.valid) {
      console.log('Project Data:', this.form.value);
      this.dataService.addProject(this.form.value)
        .then((data: any) => {
          this.form.reset({ status: 'Pending' });
        })
        .catch(err => console.error(err));
    }
  }

  getData() {
    this.dataService.getProjects().subscribe(data => {
      console.log('Projects:', data);
    });
  }
}
