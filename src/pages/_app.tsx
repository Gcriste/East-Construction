import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
