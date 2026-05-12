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
  taskItems: any[] = [];
  taskForm: FormGroup;
  editingTaskId: string | null = null;
  isEditing = false;
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
    this.firebaseService.getTasks().subscribe({
      next: (data) => {
        console.log('Received Tasks:', data);
        this.taskItems = data;
        console.log('TaskItems length:', this.taskItems.length);
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
        alert('Error fetching tasks. Check console for details.');
      }
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.isEditing && this.editingTaskId) {
        this.firebaseService.updateTask(this.editingTaskId, this.taskForm.value)
          .then(() => {
            alert('Task updated successfully!');
            this.resetForm();
          })
          .catch(err => console.error(err));
      } else {
        this.firebaseService.addTask(this.taskForm.value)
          .then(() => {
            alert('Task saved successfully!');
            this.resetForm();
          })
          .catch(err => console.error(err));
      }
    }
  }

  editTask(task: any) {
    this.isEditing = true;
    this.editingTaskId = task.id;
    this.taskForm.patchValue({
      taskName: task.taskName,
      startDate: task.startDate,
      deadline: task.deadline,
      assignee: task.assignee,
      clientName: task.clientName,
      notes: task.notes
    });
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteTask(id: string) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.firebaseService.deleteTask(id)
        .then(() => alert('Task deleted successfully!'))
        .catch((err: any) => console.error(err));
    }
  }

  resetForm() {
    this.isEditing = false;
    this.editingTaskId = null;
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