import Image from 'next/image';
import Light from '../assets/sun.png';
import Dark from '../assets/moon.png';

export default function DarkMode({ onClick, dark }) {
	return (
		<div
			className="fixed h-14 w-14 rounded-full bg-gray-600 dark:bg-gray-50 bottom-5 right-5 cursor-pointer flex justify-center items-center"
			onClick={onClick}
		>
			<Image src={dark ? Light : Dark} height={36} width={36} />
		</div>
	);
}
