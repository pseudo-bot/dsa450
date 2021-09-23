import Card from './Card';
import Data from '../../data';

const CardsContainer = () => {
	return (
		<div className="w-full px-4 flex flex-col sm:flex-row top-20 relative justify-center flex-wrap max-w-7xl mx-auto">
			{Data.map((element) => {
				return (
					<Card />
				);
			})}
		</div>
	);
};

export default CardsContainer;
