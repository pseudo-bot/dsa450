import Link from 'next/link';

const NavLinksText = ({ content, link }) => {
	return (
		<div className="px-4 sm:py-1 py-4 hover:text-white tracking-wider">
			<Link href={link}>{content}</Link>
		</div>
	);
};

export default function NavLinks({ hidden }) {
	return (
		<div
			className={`flex sm:flex-row flex-col justify-between text-gray-300 text-lg 
			sm:border sm:rounded sm:relative absolute
			sm:top-0 top-16 left-0 sm:w-auto 
			w-full items-center sm:bg-transparent
			bg-gray-700 dark:bg-gray-900 transition-height duration-300 
			${hidden ? 'max-h-0' : 'max-h-[300%]'} sm:max-h-full overflow-hidden`}
		>
			<NavLinksText content="Home" link="/" />
			<NavLinksText content="About" link="/about" />
			<NavLinksText
				content="Contribute"
				link="https://github.com/pseudo-bot/dsa450"
			/>
		</div>
	);
}
