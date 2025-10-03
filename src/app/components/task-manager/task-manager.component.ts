import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent implements OnInit {
  isLoggedIn = false;
  loginError = '';
  taskItems: TaskItem[] = [];
  
  loginForm: FormGroup;
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

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
    this.initializeDummyData();
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === '12345') {
        this.isLoggedIn = true;
        this.loginError = '';
      } else {
        this.loginError = 'Invalid username or password. Please try again.';
      }
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.loginForm.reset();
    this.loginError = '';
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: TaskItem = {
        id: this.taskItems.length + 1,
        ...this.taskForm.value
      };
      
      this.taskItems.push(newTask);
      this.taskForm.reset();
    }
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

  private initializeDummyData() {
    this.taskItems = [
      {
        id: 1,
        taskName: 'Website Redesign',
        startDate: '2025-10-01',
        deadline: '2025-11-15',
        assignee: 'John Doe',
        clientName: 'XYZ Ltd',
        notes: 'Complete redesign of the company website with modern UI/UX'
      },
      {
        id: 2,
        taskName: 'SEO Optimization',
        startDate: '2025-09-20',
        deadline: '2025-10-30',
        assignee: 'Jane Smith',
        clientName: 'ABC Corp',
        notes: 'Implement SEO best practices and improve search rankings'
      }
    ];
  }
}

