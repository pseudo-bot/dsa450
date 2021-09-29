import { useState, useContext } from 'react';
import { QuesContext } from '../../context/quesContext';

const Question = ({ ques, href, tin, qin }) => {
	let { data, setData } = useContext(QuesContext);

	const changeStatus = () => {
		let newData = [...data];
		newData[tin].problems[qin].status = !data[tin].problems[qin].status;
		data = newData;
		setData(data);
	};
	return (
		<div
			data-aos="fade-up"
			className={`flex min-h-[14rem] w-full sm:max-w-sm text-gray-100 mx-8 my-4 rounded-3xl overflow-hidden relative items-center justify-between p-6`}
		>
			<div
				className={`transform transition-all duration-300 ${
					data[tin].problems[qin].status
						? 'bg-[#18bd02]'
						: 'bg-[#ff8800] rotate-180'
				} z-0 absolute h-full w-full inset-0`}
			></div>
			<div
				className={`z-0 h-8 w-8 rounded-full border bg-white transition-all duration-300 ${
					data[tin].problems[qin].status ? 'bg-[#009218]' : ''
				} cursor-pointer`}
				onClick={changeStatus}
			></div>
			<a href={href} className="w-3/4 uppercase z-0">
				{ques}
			</a>
			<div
				className={`cursor-pointer absolute w-16 h-16 z-0 rounded-full text-gray-600 pl-5 pt-2 ${data[tin].problems[qin].status ? 'bg-[#009218] text-white':'bg-yellow-200'} -bottom-4 -right-4 flex text-2xl
			`}
			>
				{'>'}
			</div>
		</div>
	);
};

export default Question;
