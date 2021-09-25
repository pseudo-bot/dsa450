import Data from '../../data';
import Layout from '../../components/Topic/Layout';

const Topic = ({ data }) => {
	return (
		<div>
			leaderboards
		</div>
	);
};

export default Topic;

export function getStaticProps(context) {
	const path = context.params.topic;
	return {
		props: { data: Data.find((el) => el.topic === path) },
	};
}

export async function getStaticPaths() {
	const dynamicPaths = Data.map((element) => {
		return {
			params: { topic: element.topic },
		};
	});
	return {
		paths: dynamicPaths,
		fallback: false,
	};
}
