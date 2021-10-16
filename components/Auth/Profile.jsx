import Link from 'next/link';
import { logOut } from '../../lib/firebase'

const ProfileData = ({ user }) => {
	return (
		<>
			<img src={user.photoURL} alt="Profile" className="block rounded-full h-32 w- 32" />
			<div className="my-10 dark:text-gray-200 text-gray-700 mx-8 text-lg text-justify">
				Hey{' '}
				<b>
					<i>{user.displayName}</i>
				</b>
				, you are signed in. Your progress is being saved in the cloud. You can
				now access your completion progress from anywhere. Head over to the{' '}
				<Link href="/">
					<span className="text-blue-600 cursor-pointer">problems</span>
				</Link>{' '}
				section to get your hands dirty!
			</div>
		</>
	);
};

const SignOut = () => {
	return (
		<>
			<div
				className="transition-bg duration-200 bg-red-500 tracking-wider dark:bg-gray-600 shadow-md hover:bg-red-400 text-gray-200 hover:text-white text-lg p-4 rounded cursor-pointer"
				onClick={logOut}
			>
				Log out
			</div>
		</>
	);
};

export default function Profile({user}) {
	return (
		<div className="absolute top-44 w-full flex flex-col items-center">
			<ProfileData user={user} />
			<SignOut />
		</div>
	);
}
