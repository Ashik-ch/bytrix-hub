import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from "./admin-login/admin-login.component";

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
  constructor(private fb: FormBuilder,) {
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

  private apiUrl = "https://script.google.com/macros/s/AKfycbxMnCXjiWmrZxT_785Cj1uguMnCdwnsXLdjSKdN6nrI4u9gIfcTTQ0iAlqEHHeUV-anww/exec";

  fetchTasks() {
    fetch(this.apiUrl)
      .then(res => res.json())
      .then(data => {
        this.taskItems = data;
      });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: TaskItem = {
        id: this.taskItems.length + 1,
        ...this.taskForm.value
      };

      fetch(this.apiUrl, {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(() => {
          this.taskItems.push(newTask);
          this.taskForm.reset();
        });
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

