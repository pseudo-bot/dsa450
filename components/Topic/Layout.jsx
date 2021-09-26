import Tab from './Tab';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Layout() {
	const [questionTab, setQuestionTab] = useState(1);
	const router = useRouter();
	const problemPath = '/[topic]/problems';
	const leaderboardsPath = '/[topic]/leaderboards';

	useEffect(() => {
		if (router.pathname === problemPath) setQuestionTab(1);
		else if (router.pathname === leaderboardsPath) setQuestionTab(0);
	}, [router.pathname]);

	const handleClick = () => {
		setQuestionTab(!questionTab);
	};

	return (
		<div className="fixed top-16">
			<Tab questionTab={questionTab} onClick={handleClick} />
		</div>
	);
}
