const Heading = () => {
	return (
		<div
			className={`text-4xl md:text-6xl font-medium text-gray-800 text-center dark:text-gray-200`}
		>
			About
		</div>
	);
};

const Content = () => {
	return (
		<div className={`text-lg p-10 max-w-2xl mx-auto text-justify dark:text-gray-200`}>
			This site will help you to keep track of your progress of the{' '}
			<i>450 DSA Questions</i> compiled by <i>Love Babbar</i> in a user friendly
			and interactive way. You can refer to the original video{' '}
			<a
				href="https://www.youtube.com/watch?v=4iFALQ1ACdA&t=370s"
				className={`text-blue-600 dark:text-blue-400 cursor-pointer`}
			>
				here
			</a>
			. If you wish to contribute to the project or add any new features you can
			do so by following the Contribute link.
		</div>
	);
};

export default function About() {
	return (
		<div className={`relative top-36`}>
			<Heading />
			<Content />
		</div>
	);
}
