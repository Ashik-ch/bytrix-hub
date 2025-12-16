import { Injectable, inject, NgZone } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {

  private firestore = inject(Firestore);
  private zone = inject(NgZone);

  /**
   *  Dummy method to add a task to Firestore
   */
  addProject(data: any) {
    const ref = collection(this.firestore, 'projects');
    return this.zone.run(() =>
      addDoc(ref, {
        ...data, createdAt: new Date()
      })
    );
  }
  getProjects(): Observable<any[]> {
    const ref = collection(this.firestore, 'projects');
    return collectionData(ref, { idField: 'id' });
  }

  /**
   *  Task Manager firebase store methods 
   */
  addTask(data: any) {
    const ref = collection(this.firestore, 'task-manager');
    return this.zone.run(() =>
      addDoc(ref, {
        ...data, createdAt: new Date()
      })
    );
  }

  getTasks(): Observable<any[]> {
    const ref = collection(this.firestore, 'task-manager');
    return collectionData(ref, { idField: 'id' });
  }
}
