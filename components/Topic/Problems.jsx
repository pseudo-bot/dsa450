import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useContext} from 'react';
import Question from './Question';

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
