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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
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
