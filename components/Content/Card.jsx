import Link from 'next/link'

export default function Cards({ topic, total, solved }) {
	return (
		<Link href={`/${topic}/problems`}>
			<div data-aos="fade-right" className="h-64 dark:bg-gray-800 dark:text-gray-300 bg-indigo-100 flex flex-col group justify-around p-5 w-full rounded-xl shadow-md my-4 sm:max-w-md sm:mx-8 relative cursor-pointer">
				<div className="sm:text-3xl text-2xl text-gray-700 dark:text-gray-300 uppercase font-semibold m-2 mb-4">{topic}</div>
						<div className="m-2 sm:text-6xl text-4xl sm:translate-x-1/2 absolute font-extrabold text-indigo-200 dark:text-gray-600 z-0 right-16 sm:right-1/2">{total}</div>
						<div className="m-2 sm:text-base text-sm">Solved: {solved}</div>
						<div className="m-2 sm:text-base text-sm">Remaining: {total - solved}</div>
						<div className="m-2 mt-4 rounded bg-indigo-400 dark:bg-gray-600 sm:absolute right-8 text-gray-50 w-max p-3 shadow-lg transition-transform duration-200 sm:group-hover:scale-110">Start <span className="jetbrains">-{">"}</span></div>
			</div>
		</Link>
	);
}
