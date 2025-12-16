import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { FirebaseService } from 'src/app/services/firebase.service';

interface TaskItem {
  id: number;
  taskName: string;
  startDate: string;
  deadline: string;
  assignee: string;
  clientName: string;
  notes: string;
}

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AdminLoginComponent],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent implements OnInit {
  isLoggedIn = false;
  loginError = '';
  taskItems: TaskItem[] = [];
  taskForm: FormGroup;
  today = new Date().toISOString().split('T')[0];
  constructor(private fb: FormBuilder,
    private firebaseService: FirebaseService) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      startDate: ['', Validators.required],
      deadline: ['', Validators.required],
      assignee: ['', Validators.required],
      clientName: ['', Validators.required],
      notes: ['', Validators.required]
    }, { validators: this.deadlineAfterStartValidator });
  }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.firebaseService.getTasks().subscribe(data => {
      console.log('Tasks:', data);
      this.taskItems = data;
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {

      this.firebaseService.addTask(this.taskForm.value)
        .then((data: any) => {
          console.log('data:', data);
          alert('Project saved successfully!');
          this.taskForm.reset();
        })
        .catch(err => console.error(err));
    }
    this.taskForm.reset();
  }

  deadlineAfterStartValidator(form: FormGroup) {
    const startDate = form.get('startDate')?.value;
    const deadline = form.get('deadline')?.value;
    if (startDate && deadline) {
      const start = new Date(startDate);
      const end = new Date(deadline);
      if (end <= start) {
        return { deadlineAfterStart: true };
      }
    }
    return null;
  }

  handleLogin(event: any) {
    this.isLoggedIn = event;
  }

  logout() {
    this.isLoggedIn = false;
    // this.loginForm.reset();
    this.loginError = '';
  }
}