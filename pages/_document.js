import React from 'react';
import Document, {
  Html, Main, Head, NextScript,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100&family=Inter:wght@100;200;300;400;500&family=Lato:wght@200;300;400;500;600;700&family=Lobster:wght@200;300;400;500;600;700&family=Manrope:wght@200;300;400;500;600;700&family=Noto+Sans+Linear+B&family=Noto+Sans+Pau+Cin+Hau&family=Noto+Serif+Telugu:wght@900&family=Open+Sans:wght@300&family=Orbitron:wght@500&family=Oswald:wght@200&family=Orbitron:wght@400;500;600&family=Poppins:wght@100&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&family=Sora:wght@100;200;300;400;500;600;700;800&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Nunito&family=Orbitron:wght@400;500;600&family=Poppins:wght@100&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
