import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import store from '../redux/store';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
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
