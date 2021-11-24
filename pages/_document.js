import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  analyticsSrc,
  analyticsScript,
} from "../tools/google-analytics/config";

export default class MyDocument extends Document {
  // eslint-disable-next-line
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={analyticsSrc} />
          <script
            dangerouslySetInnerHTML={{
              __html: analyticsScript,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
