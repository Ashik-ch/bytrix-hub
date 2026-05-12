import { Injectable, inject } from '@angular/core';
import { 
  Firestore, 
  collection, 
  addDoc, 
  collectionData, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore: Firestore = inject(Firestore);
  constructor() {}

  // --- Tasks CRUD ---

  getTasks(): Observable<any[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    const q = query(tasksRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  addTask(task: any) {
    const tasksRef = collection(this.firestore, 'tasks');
    return addDoc(tasksRef, { ...task, createdAt: new Date() });
  }

  updateTask(id: string, task: any) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskDocRef, task);
  }

  deleteTask(id: string) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskDocRef);
  }

  // --- Projects CRUD ---

  getProjects(): Observable<any[]> {
    const projectsRef = collection(this.firestore, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  addProject(project: any) {
    const projectsRef = collection(this.firestore, 'projects');
    return addDoc(projectsRef, { ...project, createdAt: new Date() });
  }

  updateProject(id: string, project: any) {
    const projectDocRef = doc(this.firestore, `projects/${id}`);
    return updateDoc(projectDocRef, project);
  }

  deleteProject(id: string) {
    const projectDocRef = doc(this.firestore, `projects/${id}`);
    return deleteDoc(projectDocRef);
  }
}
