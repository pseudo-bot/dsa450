import Menubar from './Menubar';
import NavLinks from './NavLinks';
import AuthButton from './AuthButton';
import Link from 'next/link';

import { useState } from 'react';

const Home = () => {
	return (
		<div className={`sm:absolute left-12`}>
			<Link href="/">
				<img
					src="/images/home.png"
					alt="Home"
					className="cursor-pointer h-22 w-22"
				/>
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
		<nav className="w-full flex h-16 bg-gray-700 dark:bg-gray-900 fixed items-center sm:justify-around justify-between px-8 z-10">
			<Home />

			<AuthButton />
			<NavLinks hidden={hidden} />
			<Menubar click={handleClick} hidden={hidden} />
		</nav>
	);
};

export default Navbar;
