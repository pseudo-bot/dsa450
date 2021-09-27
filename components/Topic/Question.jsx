import { useState } from 'react';

const Question = ({ ques, href }) => {
	const [status, setStatus] = useState(0);
	return (
		<div
			data-aos="fade-up"
			className={`flex min-h-[14rem] w-full sm:max-w-sm bg-[#e77d04] text-gray-100 mx-8 my-4 rounded-3xl overflow-hidden relative items-center justify-between p-6`}
		>
			<div
				className={`h-8 w-8 rounded-full border bg-white transition-all duration-300 ${
					status ? 'bg-[#2bff00]' : ''
				} cursor-pointer`}
				onClick={() => {
					setStatus(!status);
				}}
			></div>
			<a href={href} className="w-3/4 uppercase">
				{ques}
			</a>
			<div
				className="cursor-pointer absolute w-16 h-16 rounded-full text-gray-600 pl-5 pt-2 bg-yellow-200 -bottom-4 -right-4 flex text-2xl
			"
			>
				{'>'}
			</div>
		</div>
	);
};

export default Question;
