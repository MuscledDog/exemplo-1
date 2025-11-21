// Importe outros serviços conforme necessário

import { Injectable } from '@angular/core';
import { key } from './key';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: 'exemplo-1-3cd77.firebaseapp.com',
      projectId: 'exemplo-1-3cd77',
      storageBucket: 'exemplo-1-3cd77.firebasestorage.app',
      messagingSenderId: '736791733202',
      appId: '1:736791733202:web:28b5c2547316aa34a19e0b',
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
