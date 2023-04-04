import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { AngularFireStorage } from '@angular/fire/compat/storage';

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {




}
