import { Html, Head, Main, NextScript } from 'next/document';

const GTM_ID = 'GTM-NZB2ZS5';

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
