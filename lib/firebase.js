import { initializeApp, getApps, getApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithRedirect,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
};

export let app;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp();
}


export const auth = getAuth();

export const googleAuthProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
	try {
		await signInWithPopup(auth, googleAuthProvider);
	} catch (err) {
		alert('Error signing in. Please try again later.');
		console.log(err);
	}
}
export async function logOut() {
	try {
		await signOut(auth);
	} catch (err) {
		alert('Error signing out. Please try again later.');
		console.log(err);
	}
}

export const db = getFirestore();
