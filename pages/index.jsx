import Content from '../components/Content/CardsContainer';
import data from '../assets/data/data';
import Head from '../components/Head';

export default function Home({ data }) {
	return (
		<>
			<Head title="DSA Cracker" />
			<Content data={data} />
		</>
	);
}

export const getStaticProps = async () => {
	return {
		props: { data },
	};
};
