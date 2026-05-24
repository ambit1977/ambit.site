import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Trust from '../components/Trust';
import Services from '../components/Services';
import Insights from '../components/Insights';
import Engagements from '../components/Engagements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>AMBIT — AI時代のAI活用、その第一人者として | 秋山大志</title>
        <meta
          name="description"
          content="AMBIT (秋山大志) — AIを、事業の意思決定とオペレーションの軸にする。データガバナンス・WEBアナリティクス・アドテク・MA/CRMの全領域を、AIで自動化・自律化する独立コンサルタント。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AMBIT — AI活用コンサルティング | 秋山大志" />
        <meta property="og:description" content="AIを、事業の意思決定とオペレーションの軸にする。" />
        <meta name="author" content="Taishi Akiyama / 秋山大志" />
      </Head>

      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        {/* Trust と Insights はデータが入っている時だけ自動的に表示される */}
        <Trust />
        <Services />
        <Insights />
        <Engagements />
      </main>
      <Footer />
    </>
  );
}
