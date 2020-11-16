import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css'
import '../styles/sass/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
