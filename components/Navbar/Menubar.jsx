const Line = ({ hidden, cross = 0, right = 0 }) => {
	return (
		<div
			className={`
		h-0.5 w-3/5 bg-gray-200 rounded-full group-hover:bg-gray-100 transition-all duration-200
		${hidden ? '' : 'opacity-0'} ${cross ? 'opacity-0 absolute' : ''} ${
				!hidden && cross
					? `opacity-100 ${right ? 'rotate-45' : '-rotate-45'}`
					: ''
			}

		`}
		></div>
	);
};

const Menubar = ({ click, hidden }) => {
	return (
		<div
			className="sm:hidden w-10 h-10 bg-gray-500 rounded-full flex relative flex-col items-center justify-evenly py-1.5 cursor-pointer group"
			onClick={click}
		>
			<Line hidden={hidden} />
			<Line hidden={hidden} />
			<Line hidden={hidden} />
			<Line hidden={hidden} cross={1} right={1} />
			<Line hidden={hidden} cross={1} />
		</div>
	);
};

export default Menubar;
