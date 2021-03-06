import Problem from '../../components/Topic/Problems.jsx';
import Data from '../../assets/data/data.js';
import Head from '../../components/Head';

const Problems = ({ data, index }) => {
	return (
		<>
			<Head title="Problems"/>
			<Problem data={data} index={index} />
		</>
	);
};

export default Problems;

export const getStaticProps = (context) => {
	const path = context.params.topic;
	let index = Data.findIndex((el) => el.topic === path);
	return {
		props: { data: Data[index], index },
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
