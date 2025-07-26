import { Injectable } from '@angular/core';
import { 
  Firestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  DocumentData,
  QuerySnapshot
} from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) {
    console.log('Firebase service initialized');
  }

  // Add a user to Firestore
  async addUser(user: User): Promise<string> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const docRef = await addDoc(usersCollection, {
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        street: user.street,
        zipCode: user.zipCode,
        city: user.city
      });
      console.log('User added with ID: ', docRef.id);
      return docRef.id;
    } catch (error: any) {
      console.error('Error adding user: ', error);
      throw error;
    }
  }

  // Get all users
  async getUsers(): Promise<User[]> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(usersCollection);
      const users: User[] = [];
      
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const user = new User({
          id: doc.id,
          ...userData
        });
        users.push(user);
      });
      
      return users;
    } catch (error: any) {
      console.error('Error getting users: ', error);
      throw error;
    }
  }

  // Update a user
  async updateUser(userId: string, userData: Partial<User>): Promise<void> {
    try {
      const userDoc = doc(this.firestore, 'users', userId);
      await updateDoc(userDoc, userData);
      console.log('User updated successfully');
    } catch (error: any) {
      console.error('Error updating user: ', error);
      throw error;
    }
  }

  // Delete a user
  async deleteUser(userId: string): Promise<void> {
    try {
      const userDoc = doc(this.firestore, 'users', userId);
      await deleteDoc(userDoc);
      console.log('User deleted successfully');
    } catch (error: any) {
      console.error('Error deleting user: ', error);
      throw error;
    }
  }
}