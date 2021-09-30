import { useState, useContext } from 'react';
import { QuesContext } from '../../context/quesContext';

const Tick = ({ status, handleClick }) => {
	return (
		<div
			className={`z-0 h-8 w-8 relative rounded-full border bg-white transition-all duration-300 ${
				status ? 'dark:bg-gray-600 bg-[#009218]' : ''
			} cursor-pointer flex justify-center items-center`}
			onClick={handleClick}
		>
			<div
				className={`transition-all duration-500 absolute w-0.5 ${status ? 'h-3': 'h-0'} bg-white left-2 top-3 rotate-[120deg]`}
			></div>
			<div className={`transition-all duration-500 ${status ? 'h-8': 'h-0'} w-0.5 absolute -top-2 bg-white left-[23px] rotate-[40deg]`}></div>
		</div>
	);
};

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
				className={`transform transition-all duration-500 ${
					data[tin].problems[qin].status
						? 'dark:bg-gray-900 bg-[#18bd02]'
						: 'dark:bg-gray-800 bg-[#df7802] rotate-180'
				} z-0 absolute h-full w-full inset-0`}
			></div>

			<Tick
				status={data[tin].problems[qin].status}
				handleClick={() => {
					changeStatus();
				}}
			/>

			<a href={href} className="w-3/4 uppercase z-0">
				{ques}
			</a>
			<a href={href}
				className={`cursor-pointer absolute w-16 h-16 z-0 rounded-full text-gray-600 pl-5 pt-2 transition-all duration-500 ${
					data[tin].problems[qin].status
						? 'dark:bg-gray-600 bg-[#009218] text-white'
						: 'bg-yellow-200 dark:bg-gray-600 dark:text-white'
				} -bottom-4 -right-4 flex text-2xl
			`}
			>
				{'>'}
			</a>
		</div>
	);
};

export default Question;
