import Card from './Card';
import { useContext, useEffect } from 'react';
import { QuesContext } from '../../context/quesContext';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CardsContainer = () => {
	let { data } = useContext(QuesContext);
	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);

	return (
		<div className="w-full px-8 flex flex-col sm:flex-row py-20 relative justify-center flex-wrap max-w-7xl mx-auto">
			{data.map((element, index) => {
				let solved = element.problems.filter(el => el.status).length;
				return (
					<Card
						key={index}
						topic={element.topic}
						total={element.problems.length}
						solved={solved}
					/>
				);
			})}
		</div>
	);
};

export default CardsContainer;
