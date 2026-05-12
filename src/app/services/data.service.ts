import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  // Mock initial data for Projects
  private projectsSubject = new BehaviorSubject<any[]>([
    { 
      id: '1', 
      name: 'E-commerce Platform', 
      status: 'Active', 
      payment: 5000,
      date: '2026-05-20',
      notes: 'Initial development phase' 
    },
    { 
      id: '2', 
      name: 'Mobile Banking App', 
      status: 'Pending', 
      payment: 12000,
      date: '2026-06-15',
      notes: 'Waiting for security audit' 
    }
  ]);

  // Mock initial data for Tasks
  private tasksSubject = new BehaviorSubject<any[]>([
    { 
      id: '1', 
      taskName: 'Design System Update', 
      startDate: '2026-05-10', 
      deadline: '2026-05-15', 
      assignee: 'Alice Johnson', 
      clientName: 'TechCorp', 
      notes: 'Update the primary color palette' 
    },
    { 
      id: '2', 
      taskName: 'API Integration', 
      startDate: '2026-05-12', 
      deadline: '2026-05-18', 
      assignee: 'Bob Smith', 
      clientName: 'FinStream', 
      notes: 'Integrate the new payment gateway' 
    }
  ]);

  /**
   * Mock method to add a project
   */
  addProject(data: any) {
    const current = this.projectsSubject.value;
    const newProject = { ...data, id: Math.random().toString(36).substr(2, 9), createdAt: new Date() };
    this.projectsSubject.next([...current, newProject]);
    return Promise.resolve(newProject);
  }

  getProjects(): Observable<any[]> {
    return this.projectsSubject.asObservable();
  }

  /**
   * Mock method to add a task
   */
  addTask(data: any) {
    const current = this.tasksSubject.value;
    const newTask = { ...data, id: Math.random().toString(36).substr(2, 9), createdAt: new Date() };
    this.tasksSubject.next([...current, newTask]);
    return Promise.resolve(newTask);
  }

  getTasks(): Observable<any[]> {
    return this.tasksSubject.asObservable();
  }
}
