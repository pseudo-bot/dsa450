import Card from './Card';
import { useContext, useEffect } from 'react';
import { QuesContext } from '../../context/QuestionsContext';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CardsContainer = ({ data }) => {
	const {status} = useContext(QuesContext)

	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	
	return (
		<div className="w-full px-8 flex flex-col sm:flex-row py-20 relative justify-center flex-wrap max-w-7xl mx-auto">
			{data.map((element, index) => {
				let solved = status[index][0].filter(el => el).length
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
