import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout><Component {...pageProps} /></Layout>;
}
