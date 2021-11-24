import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import store from '../redux/store';
import Head from 'next/head';
import '../styles/globals.css'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import * as Analytics from '../tools/google-analytics/analytics';

const MyApp = ({ Component, pageProps }) => {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      Analytics.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css" />
        <link rel="shortcut icon" type="image/png" href="/icons/ic_tb_logo.png" />
        <link rel="og:title" content="여행성향 테스트 by 트립빌더" />
        <link rel="og:description" content="인스타그램 공유 이벤트 진행 중! @teamtripbuilder" />
        <link rel="og:image" type="image/png" href="/icons/ic_tb_logo.png" />
        <link rel="twitter:title" content="여행성향 테스트 by 트립빌더" />
        <link rel="twitter:description" content="인스타그램 공유 이벤트 진행 중! @teamtripbuilder" />
        <link rel="twitter:image" type="image/png" href="/icons/ic_tb_logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
