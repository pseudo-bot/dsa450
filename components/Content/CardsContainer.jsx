import Card from './Card';
import Data from '../../data';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CardsContainer = () => {
	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="w-full px-8 flex flex-col sm:flex-row top-20 relative justify-center flex-wrap max-w-7xl mx-auto">
			{Data.map((element, index) => {
				return (
					<Card
						key={index}
						topic={element.topic}
						totalQs={element.problems.length}
					/>
				);
			})}
		</div>
	);
};

export default CardsContainer;
