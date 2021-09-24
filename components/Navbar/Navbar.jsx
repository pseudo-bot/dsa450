import Menubar from './Menubar';
import NavLinks from './NavLinks';
import Signin from './Signin';

import { useState } from 'react';

const Navbar = () => {
	const [hidden, setHidden] = useState(1);
	const handleClick = () => {
		setHidden(!hidden);
	}
	return (
		<nav className="w-full flex h-16 bg-gray-700 dark:bg-gray-900 fixed items-center sm:justify-around justify-between px-8 z-10">
			<Signin />
			<NavLinks hidden={hidden}/>
			<Menubar click={handleClick} />
		</nav>
	);
};

export default Navbar;
