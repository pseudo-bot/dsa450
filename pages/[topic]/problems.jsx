import Problem from '../../components/Topic/Problems.jsx';
import Data from '../../assets/data/data'

const Problems = ({ data }) => {
	return (
		<>
			<Problem data={data} />
		</>
	);
};

export default Problems;

export const getStaticProps = (context) => {
	const path = context.params.topic;
	return {
		props: { data: Data.find((el) => el.topic === path) },
	};
};

export const getStaticPaths = async () => {
	const paths = Data.map((element) => {
		return {
			params: {
				topic: element.topic,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
};
