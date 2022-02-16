import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { UserProvider } from '../context/UserContext';
import { QuesProvider } from '../context/QuestionsContext';

function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  return (
    <UserProvider>
      <QuesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QuesProvider>
    </UserProvider>
  );
}

export default App;
