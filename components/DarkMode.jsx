export default function DarkMode({ onClick }) {
	return (
		<div
			className="fixed h-12 w-12 rounded-full bg-sun bottom-5 right-5 cursor-pointer"
			onClick={onClick}
		></div>
	);
}
