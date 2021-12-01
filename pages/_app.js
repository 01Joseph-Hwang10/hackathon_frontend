import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import store from '../redux/store';
import '../styles/globals.css'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import * as Analytics from '../tools/analytics/google-analytics';

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
