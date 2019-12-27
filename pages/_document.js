import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { setCookie } from 'nookies';

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const addJSONLD = () => {
  return {
    __html: `{
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Zemuldo",
      "url": "http://www.zemuldo.com",
      "address": "24136-00100, Nairobi, Kenya",
      "sameAs": [
        "https://www.instagram.com/zemuldo",
        "https://web.facebook.com/zemuldo",
        "https://twitter.com/zemuldo",
        "https://www.linkedin.com/in/zemuldo",
        "https://medium.com/@zemuldo",
        "https://stackshare.io/zemuldo",
        "https://stackoverflow.com/users/story/6856820",
        "https://gitlab.com/zemuldo",
        "https://github.com/zemuldo",
        "https://app.pluralsight.com/profile/zemuldo"
      ]
    }`
  };
};
class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-dark.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={ addJSONLD() }
          />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  if (ctx.query.token) {
    setCookie(ctx, 'authorization', ctx.query.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    query: ctx.query,
    styles: [
      < key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>
    ]
  };
};

export default MyDocument;
