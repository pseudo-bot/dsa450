/* eslint-disable @next/next/no-img-element */
import { logOut } from '../../lib/firebase';
import { QuesContext } from '../../context/QuestionsContext';
import { useContext } from 'react';

const SignOut = () => {
	return (
		<div
			className="transition-bg uppercase font-medium duration-200 bg-red-500 tracking-wider dark:bg-gray-800 shadow-md hover:bg-red-400 text-gray-200 hover:text-white text-lg p-4 rounded-lg cursor-pointer z-8 my-10"
			onClick={logOut}
		>
			Log out
		</div>
	);
};

const ProfileData = ({ id, data, label }) => {
	return (
		<div className={`flex justify-between items-center flex-col`}>
			<label
				htmlFor={id}
				className={`p-3 w-32 text-center rounded-full font-medium uppercase tracking-wider text-gray-600 dark:text-gray-200`}
			>
				{label}
			</label>
			<input
				type="text"
				id={id}
				value={data}
				className={`h-10 max-w-[15rem] shadow-sm p-4 mx-4 bg-blue-100 dark:bg-gray-800 dark:text-gray-100 text-center rounded-full text-gray-700`}
				disabled
			/>
		</div>
	);
};

export default function Profile({ user }) {
	let solved = 0;
	let { status } = useContext(QuesContext);

	status.forEach((el) => {
		solved += el[0].filter((e) => e).length;
	});

	return (
		<div className={`relative top-28 flex flex-col items-center gap-6`}>
			<div className={`m-6 flex items-center justify-center`}>
				<div
					className={`absolute text-5xl tracking-widest font-extrabold opacity-20 text-gray-500 dark:text-gray-50`}
				>
					PROFILE
				</div>
			</div>
			<img
				src={user.photoURL}
				alt="Profile Picture"
				className={`block rounded-full h-28 border-2 my-6`}
			/>
			<ProfileData id="username" data={user.displayName} label="Username" />
			<ProfileData id="solved" data={solved} label="Solved" />
			<ProfileData id="unsolved" data={450 - solved} label="Unsolved" />
			<SignOut />
		</div>
	);
}
