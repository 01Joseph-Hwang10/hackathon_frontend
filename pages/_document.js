import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  analyticsScript,
  analyticsSrc,
} from "../tools/analytics/google-analytics";
import { naverScript } from "../tools/analytics/naver-analytics";

class MyDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // eslint-disable-next-line
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={analyticsSrc} />
          <script
            dangerouslySetInnerHTML={{
              __html: analyticsScript,
            }}
          />
          {/* Naver Script */}
          <script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: naverScript }}
          />
          {/* 
            Two conflict errors
            https://nextjs.org/docs/messages/no-document-title 
            https://nextjs.org/docs/messages/next-head-count-missing
          */}
          <title>
            여행성향 테스트 - STTI 여행성향 분석 (여행 고 시뮬레이션)
          </title>
          {/* <!-- Primary Meta Tags --> */}
          <link rel="canonical" href="https://stti.tripbuilder.co.kr/" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/icons/ic_tb_logo.png"
          />
          <link
            rel="og:title"
            // @ts-ignore
            content="여행성향 테스트 - STTI 여행성향 분석 (여행 고 시뮬레이션)"
          />
          <link
            rel="og:description"
            // @ts-ignore
            content="여행 한 번 떠나볼까? 빅데이터와 AI 알고리즘을 적용한 여행성향을 파악 테스트"
          />
          <link rel="og:image" type="image/png" href="/image/web_logo.jpg" />
          <meta name="robots" content="index, follow" />
          <meta
            name="title"
            content="여행성향 테스트 - STTI 여행성향 분석 (여행 고 시뮬레이션)"
          />
          <meta
            name="description"
            content="여행 한 번 떠나볼까? 빅데이터와 AI 알고리즘을 적용한 여행성향을 파악 테스트"
          />
          <meta
            name="keywords"
            content="여행성향, 성향분석, 여행타입, 트립빌더, 여행고, 여행고시뮬레이션, 국내여행, 여행경험, 간접여행, 여행 AI, 여행 인공지능 "
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://stti.tripbuilder.co.kr/" />
          <meta
            property="og:title"
            content="여행성향 테스트 - STTI 여행성향 분석 (여행 고 시뮬레이션)"
          />
          <meta
            property="og:description"
            content="여행 한 번 떠나볼까? 빅데이터와 AI 알고리즘을 적용한 여행성향을 파악 테스트"
          />
          <meta property="og:image" content="/image/web_logo.jpg" />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://stti.tripbuilder.co.kr/"
          />
          <meta
            property="twitter:title"
            content="여행성향 테스트 - STTI 여행성향 분석 (여행 고 시뮬레이션)"
          />
          <meta
            property="twitter:description"
            content="여행 한 번 떠나볼까? 빅데이터와 AI 알고리즘을 적용한 여행성향을 파악 테스트"
          />
          <meta property="twitter:image" content="/image/web_logo.jpg" />
          <span itemScope="" itemType="http://schema.org/Organization">
            <link itemProp="url" href="https://stti.tripbuilder.co.kr/​​" />
            <a
              itemProp="sameAs"
              href="https://www.instagram.com/teamtripbuilder/"
            ></a>
            <a
              itemProp="sameAs"
              href="https://www.facebook.com/teamtripbuilder/"
            ></a>
            <a
              itemProp="sameAs"
              href="https://www.youtube.com/channel/UCHLdqD8Ov0tLA7rveJiCdNg"
            ></a>
          </span>
          <meta
            name="naver-site-verification"
            content="458a4f3b5604e4ed5bfbd5050d9ed4eb45e8545e"
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

export default MyDocument;
