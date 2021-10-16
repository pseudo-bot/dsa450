import SignInCard from '../components/Auth/SignInCard';
import { signInWithGoogle, signInWithGithub } from '../lib/firebase';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import Profile from '../components/Auth/Profile';
import Head from '../components/Head';

export default function Auth() {
	let user = useContext(UserContext);
	return (
		<div>
			{user ? <Head title="Profile" /> : <Head title="Sign in" />}
			{user ? (
				<Profile user={user} />
			) : (
				<SignInCard
					signInWithGoogle={signInWithGoogle}
					signInWithGithub={signInWithGithub}
				/>
			)}
		</div>
	);
}
