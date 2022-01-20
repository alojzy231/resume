/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Damian Kłos | Front-end developer</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
