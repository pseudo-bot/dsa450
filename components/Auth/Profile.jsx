import Link from 'next/link';
import { logOut } from '../../lib/firebase';
import { QuesContext } from '../../context/QuestionsContext';
import { useContext } from 'react';

const ProfilePic = ({ photoURL }) => {
	return (
		<div>
			<img
				src={photoURL}
				alt="Profile Picture"
				className={`block h-28 w-28 rounded-lg my-10`}
			/>
		</div>
	);
};

const ProfileData = ({ name, id, data }) => {
	return (
		<div className="my-4 z-8 w-4/5 flex flex-col justify-center items-center">
			<label
				htmlFor={id}
				className="mx-8 w-20 text-lg text-center dark:text-gray-200 text-gray-700"
			>
				{name}{' '}
			</label>
			<input
				type="text"
				id={id}
				disabled
				value={data}
				className={`p-3 text-lg text-gray-600 bg-gray-50 my-4 rounded-full text-center w-4/5 shadow-md border max-w-[24rem]`}
			/>
		</div>
	);
};

const SignOut = () => {
	return (
		<div
			className="transition-bg duration-200 bg-red-500 tracking-wider dark:bg-gray-800 shadow-md hover:bg-red-400 text-gray-200 hover:text-white text-lg p-4 rounded cursor-pointer z-8 my-6"
			onClick={logOut}
		>
			Log out
		</div>
	);
};

export default function Profile({ user }) {
	let solved = 0;
	const { status } = useContext(QuesContext);

	status.forEach((el) => {
		solved += el[0].filter((e) => e).length;
	});

	return (
		<div className="w-full absolute top-32">
			<div className="relative my-10 mx-auto max-w-[60rem] w-4/5 rounded-lg flex justify-center flex-col items-center dark:bg-gray-600 shadow-2xl">
				<ProfilePic photoURL={user.photoURL} />
				<ProfileData data={user.displayName} id="username" name="Username" />
				<ProfileData data={solved} id="solved" name="Solved" />
				<ProfileData data={450 - solved} id="unsolved" name="Unsolved" />
				<SignOut />
			</div>
		</div>
	);
}
