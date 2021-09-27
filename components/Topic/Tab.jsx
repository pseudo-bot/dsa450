import Link from 'next/link';
import { useRouter } from 'next/router';

const TabName = ({ name, selected, flag, onClick, href }) => {
	return (
		<Link href={href} replace>
			<div
				className={`w-full text-center cursor-pointer py-2 border-b-2 
						${
					selected
						? 'border-green-300 bg-gray-100 dark:border-gray-200 dark:bg-gray-800'
						: 'hover:bg-green-100 hover:border-green-200 dark:bg-gray-700 bg-white dark:hover:border-gray-500 dark:hover:bg-gray-800 dark:border-gray-500'
				}
						dark:text-gray-200
						transition-all duration-0
						text-gray-500 sm:text-lg uppercase tracking-wider font-medium
					`}
				onClick={() => {
					if ((name === 'Problems' && flag) || (name === 'Leaderboards' && !flag))
						return;
					else onClick();
				}}
			>
				{name}
			</div>
		</Link>
	);
};

export default function Tab({ questionTab, onClick }) {
	const router = useRouter();
	const path = '/' + router.query.topic + '/';
	return (
		<div className="w-screen flex items-center shadow-sm">
			<TabName
				name="Problems"
				selected={questionTab}
				flag={questionTab}
				onClick={onClick}
				href={path + 'problems'}
			/>

			<TabName
				name="Leaderboards"
				selected={!questionTab}
				flag={questionTab}
				onClick={onClick}
				href={path + 'leaderboards'}
			/>
		</div>
	);
}
