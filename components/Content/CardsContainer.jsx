import Card from './Card';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CardsContainer = ({ data }) => {
	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="w-full px-8 flex flex-col sm:flex-row py-20 relative justify-center flex-wrap max-w-7xl mx-auto">
			{data.map((element, index) => {
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
