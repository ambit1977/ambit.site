import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="AMBIT - Data Governance × WEBアナリティクス × アドテク Consultant" />
        <meta name="og:title" content="AMBIT" />
        <meta name="og:description" content="データを、事業の意思決定言語にする。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
