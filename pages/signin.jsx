import React from 'react';
import { auth, googleProvider } from '../lib/firebase.js';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import SignInButton from '../components/Auth/SignInCard';

const signInWithGoogle = async () => {
	try {
		await signInWithRedirect(auth, googleProvider);
	} catch (err) {
		alert('Error signing in. Please try again');
	}
};

const signOut = () => {
	try {
		auth.signOut();
	} catch (err) {
		alert('Error signing out. Please try again.');
	}
};

export default function Signin() {
	return (
		<div>
			<SignInButton googleSignIn={signInWithGoogle} />
		</div>
	);
}
