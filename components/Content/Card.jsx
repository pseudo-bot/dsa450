export default function Cards({ topic, totalQs, remainingQs }) {
	return (
		<div className="h-60 bg-green-100 flex flex-col justify-around px-5 w-full rounded-xl my-4 sm:max-w-md sm:mx-4 relative cursor-pointer transition-transform duration-300 hover:scale-105">
			<div className="text-2xl text-gray-800 uppercase">{topic}</div>
      <div className="">Total Questions: {totalQs}</div>
      <div className="">Solved: {totalQs - remainingQs}</div>
      <div className="">Remaining: {remainingQs}</div>
		</div>
	);
}
