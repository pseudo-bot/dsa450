import Link from 'next/link'

export default function Cards({ topic, totalQs, remainingQs }) {
	return (
		<Link href={`/${topic}/problems`}>
			<div data-aos="fade-right" className="h-60 dark:bg-gray-800 dark:text-gray-300 bg-indigo-100 flex flex-col group justify-around p-5 w-full rounded-xl shadow-md my-4 sm:max-w-md sm:mx-8 relative cursor-pointer">
				<div className="text-3xl text-gray-700 dark:text-gray-300 uppercase font-bold m-2 mb-4">{topic}</div>
						<div className="m-2 text-6xl left-1/2 -translate-x-1/2 absolute font-extrabold text-indigo-200 dark:text-gray-600">{totalQs}</div>
						<div className="m-2">Solved: {totalQs - remainingQs}</div>
						<div className="m-2">Remaining: {remainingQs}</div>
						<div className="m-2 mt-4 rounded bg-indigo-400 dark:bg-gray-600 sm:absolute right-8 text-gray-50 w-max p-3 shadow-lg transition-transform duration-200 sm:group-hover:scale-110">Start -{">"}</div>
			</div>
		</Link>
	);
}
