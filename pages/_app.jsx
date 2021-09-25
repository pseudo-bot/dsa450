import Layout from '../components/Layout';
import '../styles/globals.css';
import TopicsLayout from '../components/Topic/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<Layout>
			<Component {...pageProps} />
			{router.query.topic ? <TopicsLayout /> : ''}
		</Layout>
	);
}

export default MyApp;
