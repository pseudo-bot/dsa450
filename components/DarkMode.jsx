import Image from 'next/image';
import Light from '../assets/images/sun.png';
import Dark from '../assets/images/moon.png';

export default function DarkMode({ onClick, dark }) {
	return (
		<div
			className="fixed h-10 w-10 rounded-full bg-gray-600 dark:bg-gray-50 bottom-5 right-5 cursor-pointer flex justify-center items-center"
			onClick={onClick}
		>
			<Image src={dark ? Light : Dark} height={28} width={28} />
		</div>
	);
}
