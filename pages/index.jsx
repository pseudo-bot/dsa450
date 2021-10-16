import Content from '../components/Content/CardsContainer';
import Data from '../assets/data/data';
import Head from '../components/Head';

export default function Home({ data }) {
	return (
		<>
			<Head title="DSA Cracker" />
			<Content data={data} />
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { data: Data },
	};
}
