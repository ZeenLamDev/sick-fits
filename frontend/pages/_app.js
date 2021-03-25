/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NProress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProress.start());
Router.events.on('routeChangeComplete', () => NProress.done());
Router.events.on('routeChangeError', () => NProress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
