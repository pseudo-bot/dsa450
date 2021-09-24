import Image from 'next/image';
import Arrow from '../../assets/arrow.png';

const Menubar = ({ click, hidden }) => {
	return (
		<div className={`sm:hidden h-8 w-8 group cursor-pointer transition-transform duration-300 ${hidden ? '' : 'rotate-180'}`} onClick={click}>
			<Image src={Arrow}/>
		</div>
	);
};

export default Menubar;
