import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Question = ({ ques, href}) => {
	const [status, setStatus] = useState(0);
	return (
		<div
			data-aos="fade-up"
			className={`flex h-56 w-full sm:max-w-sm bg-yellow-500 text-gray-100 mx-8 my-4 rounded-3xl overflow-hidden relative items-center justify-between p-5`}
		>
			<div
				className={`h-8 w-8 rounded-full border bg-white transition-all duration-300`}
				style={{
					backgroundImage: status
						? 'linear-gradient(60deg, #88f855, #15ec01eb)'
						: '',
				}}
				onClick={() => {
					setStatus(!status);
				}}
			></div>
			<a href={href} className="w-3/4 uppercase">{ques}</a>
			<div
				className="cursor-pointer absolute w-16 h-16 rounded-full text-gray-600 pl-5 pt-2 bg-yellow-200 -bottom-4 -right-4 flex text-2xl
			"
			>
				{'>'}
			</div>
		</div>
	);
};

export default function Problems({ data }) {
	useEffect(() => {
		Aos.init({
			duration: 400,
		});
	}, []);
	return (
		<div className="w-screen px-5 mx-auto relative top-32 flex flex-wrap max-w-5xl justify-center">
			{data.problems.map((el, index) => {
				return <Question key={index} ques={el.desc} href={el.link} />;
			})}
		</div>
	);
}
