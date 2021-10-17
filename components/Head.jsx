import HeadTag from 'next/head';

const Head = ({ title }) => {
	return (
		<HeadTag>
			<title>{title}</title>
			<link
				rel="icon"
				href="/images/title_icon.png"
				type="image/icon type"
			></link>
		</HeadTag>
	);
};

export default Head;
