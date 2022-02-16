import Menubar from './Menubar';
import NavLinks from './NavLinks';
import AuthButton from './AuthButton';
import Link from 'next/link';

import { useState } from 'react';

const Home = () => {
	return (
		<div className={`sm:absolute left-12`}>
			<Link href="/">
				<div className={`flex items-center`}>
					<img src="/images/home.png" alt="Home" className="cursor-pointer" />
					<div className="text-gray-300 mx-2 ">Home</div>
				</div>
			</Link>
		</div>
	);
};

const Navbar = () => {
	const [hidden, setHidden] = useState(1);

	const handleClick = () => {
		setHidden(!hidden);
	};

	return (
		<nav className="w-full z-[100] flex h-16 bg-gray-700 dark:bg-gray-900 fixed items-center sm:justify-around justify-between px-8">
			<AuthButton />
			<NavLinks hidden={hidden} />
			<Menubar click={handleClick} hidden={hidden} />
		</nav>
	);
};

export default Navbar;
