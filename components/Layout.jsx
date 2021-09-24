import Navbar from './Navbar/Navbar';
import DarkMode from './DarkMode';
import { useState } from 'react';

const Layout = ({ children }) => {
	const [dark, setDark] = useState(0);

	const handleClick = () => {
		setDark(!dark);
	}
	return (
		<main className={`${dark ? 'dark' : ''}`}>
			<div className="dark:bg-gray-600">
				<Navbar />
				{children}
				<DarkMode onClick={handleClick}/>
			</div>
		</main>
	);
};

export default Layout;
