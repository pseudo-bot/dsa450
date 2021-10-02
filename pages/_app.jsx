import Layout from '../components/Layout';
import '../styles/globals.css';

import TopicsLayout from '../components/Topic/Layout';
import { useRouter } from 'next/router';
import { QuesProvider } from '../context/quesContext';

import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps: {session, ...pageProps} }) {
	const router = useRouter();
	return (
		<SessionProvider session={session}>
			<QuesProvider>
				<Layout>
					<Component {...pageProps} />
					{router.query.topic ? <TopicsLayout /> : null}
				</Layout>
			</QuesProvider>
		</SessionProvider>
	);
}

export default App;
