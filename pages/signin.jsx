import React from 'react';
import { auth, googleAuthProvider } from '../lib/firebase.js';
import SignInButton from '../components/Auth/SignInCard';

const signInWithGoogle = async () => {
	try {
		await auth.signInWithPopup(googleAuthProvider);
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
