import Navbar from './Navbar/Navbar';
import DarkMode from './DarkMode';
import { useState } from 'react';

const Layout = ({ children }) => {
	const [dark, setDark] = useState(0);

	const handleClick = () => {
		setDark(!dark);
	};
	return (
		<main className={`${dark ? 'dark' : ''}`}>
			<div className="dark:bg-gray-700 h-screen w-screen fixed z-0"></div>
			<Navbar />
			{children}
			<DarkMode onClick={handleClick} dark={dark} />
		</main>
	);
};

export default Layout;
