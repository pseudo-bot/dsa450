import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDnSahoUIWgYhiA0x32pbWbCnvpS3D70_c",
  authDomain: "dsacracker-cbf03.firebaseapp.com",
  projectId: "dsacracker-cbf03",
  storageBucket: "dsacracker-cbf03.appspot.com",
  messagingSenderId: "558427089128",
  appId: "1:558427089128:web:4756f9c184e54e9c1a015d",
  measurementId: "G-19WZV8DYSF"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
 