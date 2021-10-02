import { initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDnSahoUIWgYhiA0x32pbWbCnvpS3D70_c",
  authDomain: "dsacracker-cbf03.firebaseapp.com",
  projectId: "dsacracker-cbf03",
  storageBucket: "dsacracker-cbf03.appspot.com",
  messagingSenderId: "558427089128",
  appId: "1:558427089128:web:4756f9c184e54e9c1a015d",
  measurementId: "G-19WZV8DYSF"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);