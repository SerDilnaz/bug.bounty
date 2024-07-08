import Head from 'next/head';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Bug Bounty Program</title>
        <meta name="description" content="Bug Bounty Program Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
};

export default Home;
