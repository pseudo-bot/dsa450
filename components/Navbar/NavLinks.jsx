
const NavLinksText = ({ content, link }) => {
	return (
		<a href={link} className="px-4 sm:py-1 py-4 hover:text-white tracking-wider">
			{content}
		</a>
	);
};

export default function NavLinks({ hidden }) {
	return (
		<div
			className={`flex sm:flex-row flex-col justify-between text-gray-300 text-lg 
			sm:border sm:rounded sm:relative absolute
			sm:top-0 top-16 left-0 sm:w-auto 
			w-full items-center sm:bg-transparent 
			bg-gray-700 dark:bg-gray-900 transition-all ease-in-out duration-300 
			${hidden ? 'opacity-0 pointer-events-none' : ''} sm:opacity-100 sm:pointer-events-auto`}
		>
			<NavLinksText content="About" link="#" />
			<NavLinksText content="Contribute" link="#" />
		</div>
	);
}
