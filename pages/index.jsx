import Content from '../components/Content/CardsContainer';
import data from '../assets/data/data';
export default function Home({ data }) {
	return (
		<>
			<Content data={data}/>
		</>
	);
}

export const getStaticProps = async () => {
	return {
		props: { data },
	};
};
