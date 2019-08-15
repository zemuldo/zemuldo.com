import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import theme from '../src/theme';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Global site tag (gtag.js) - Google Analytics */}
        {/* Meta Tag */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* SEO */}
        <meta name="description" content="Danstan Onyango, Software Engineer in Nairobi, Kenya." />
        <meta name="author" content="Danstan O. Onyango" />
        <meta name="url" content="https://zemuldo.com" />
        <meta name="copyright" content="Zemuldo" />
        <meta name="robots" content="index,follow" />
        {/* Favicon */}
        <link rel="shortcut icon" href="images/favicon/fav.png" />
        <link rel="apple-touch-icon" sizes="144x144" type="image/x-icon" href="/static/images/favicon/apple-touch-icon.png" />
        {/* All CSS Plugins */}
        <link rel="stylesheet" type="text/css" href="/static/css/plugin.css" />
        {/* Main CSS Stylesheet */}
        <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
        {/* Emoji CSS Stylesheet */}
        <link rel="stylesheet" type="text/css" href="/static/css/terminal.css" />
        {/* Matrix Canvas Stylesheet */}
        <link rel="stylesheet" type="text/css" href="/static/css/matrix.css" />
        {/* Google Web Fonts  */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700" />
        {/* HTML5 shiv and Respond.js support IE8 or Older for HTML5 elements and media queries */}
        {/*[if lt IE 9]><![endif]*/}
        <meta name="description" content="Danstan Otieno Onyango is a talented Software Developer. Consult Danstan for your next project. Creative and Clean work for the growth and efficiency of your business.  " />
        <meta name="twitter:card" content="https://zemuldo.com/images/favicon/fav.png" />
        <meta name="twitter:site" content="@zemuldo" />
        <meta name="twitter:title" content="Danstan Onyango - Software Engineering, ML, AI & IOT enthusiast" />
        <meta name="twitter:description" content="The official site for Zemyldo,  Danstan Otieno Onyango, a Self-Taught Software Engineer." />
        <meta name="twitter:creator" content="@zemuldo" />
        <meta name="twitter:image" content="https://zemuldo.com/images/favicon/fav.png" />
        <meta name="twitter:domain" content="https://zemuldo.com" />
        <meta name="keywords" content="zemuldo, danstan, software developer, software engineer, linux, nodejs, developer, software, zemuldo.com, developer, programming, coder, nodejs, elixir " />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <canvas id="c" className="matrix"></canvas>
          <Main />
          <NextScript />
          <script type="text/javascript" src="/static/js/jquery.min.js"/>
          <script type="text/javascript" src="/static/js/plugin.js"/>
          <script type="text/javascript" src="/static/js/scripts.js"/>
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
