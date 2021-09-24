export default function Cards({ topic, totalQs, remainingQs }) {
	return (
		<div data-aos="fade-right" className="dark:bg-gray-800 dark:text-gray-300 bg-indigo-100 flex flex-col group justify-around p-5 w-full rounded-xl shadow-md my-4 sm:max-w-md sm:mx-4 relative cursor-pointer">
			<div className="text-2xl text-gray-800 dark:text-gray-300 uppercase font-bold m-2 mb-4">{topic}</div>
      <div className="m-2">Total Questions: {totalQs}</div>
      <div className="m-2">Solved: {totalQs - remainingQs}</div>
      <div className="m-2">Remaining: {remainingQs}</div>
      <div className="m-2 mt-4 rounded bg-indigo-400 dark:bg-gray-600 sm:absolute right-8 text-gray-50 w-max p-3 shadow-lg sm:group-hover:animate-bounce">Start -{">"}</div>
		</div>
	);
}
