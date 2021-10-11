import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect } from 'react';

const SignInButton = () => {
	return (
		<Link href="/auth">
			<div className="transition-bg duration-200 bg-green-600 tracking-wider dark:bg-gray-600 shadow-md hover:bg-green-500 text-gray-200 hover:text-white text-lg p-2 rounded cursor-pointer">
				Sign in
			</div>
		</Link>
	);
};

const SignOutButton = ({ src, name }) => {
	return (
		<Link href="/auth">
			<div className="flex items-center">
				<img
					src={src}
					alt="Profile Image"
					className="cursor-pointer block w-10 h-10 rounded-full"
				/>
				<div className="cursor-pointer hidden lg:block m-3 text-sm p-2 px-3 rounded-full text-gray-100 font-medium bg-indigo-500">
					Signed in as <i>{name.substr(0, 20)}</i>
				</div>
			</div>
		</Link>
	);
};

const AuthButton = () => {
	let user = useContext(UserContext);
	return (
		<>
			{user ? (
				<SignOutButton src={user.photoURL} name={user.displayName} />
			) : (
				<SignInButton />
			)}
		</>
	);
};

export default AuthButton;
