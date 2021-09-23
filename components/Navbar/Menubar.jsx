import { useState } from 'react';

const Bars = () => {
	return (
		<div className="w-full h-1 bg-gray-300 transition-bg duration-200 group-hover:bg-white rounded-full"></div>
	);
};

const Menubar = ({ click }) => {
	return (
		<div
			className="sm:hidden flex h-8 w-8 flex-col justify-around group cursor-pointer"
			onClick={click}
		>
			<Bars />
			<Bars />
			<Bars />
		</div>
	);
};

export default Menubar;
