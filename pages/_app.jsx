import Layout from '../components/Layout';
import '../styles/globals.css';
import TopicsLayout from '../components/Topic/Layout';
import { useRouter } from 'next/router';
import { QuesProvider } from '../context/quesContext'

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<QuesProvider>
			<Layout>
				<Component {...pageProps} />
				{router.query.topic ? <TopicsLayout /> : null}
			</Layout>
		</QuesProvider>
	);
}

export default MyApp;
