// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth dark">
        <Head>
          {/* Google Fonts: Inter */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          /> */}
           <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Proof of Funds</title>
            <link
              href="https://db.onlinewebfonts.com/c/fca8cfd5ab0f5792f32a4cfe2165899e?family=Glorify+DEMO"
              rel="stylesheet"
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /* Use the provided font */\n    body {\n      font-family: Glorify DEMO;\n    }\n  "
              }}
            />
        </Head>
        <body className="antialiased text-gray-900 dark:text-gray-100 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
