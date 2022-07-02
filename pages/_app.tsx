/* eslint-disable @next/next/no-page-custom-font */
import 'bootstrap/dist/css/bootstrap.css'
import '@popperjs/core';
import React, { useEffect } from 'react';
import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);
  return (
    <RecoilRoot>
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp
