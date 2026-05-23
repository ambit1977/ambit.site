import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Engagements from '../components/Engagements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>AMBIT — Data Governance × WEBアナリティクス × アドテク</title>
        <meta name="description" content="データを、事業の意思決定言語にする。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Engagements />
      </main>
      <Footer />
    </>
  );
}
