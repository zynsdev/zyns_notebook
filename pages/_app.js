import '../public/css/global.scss'
import Router from 'next/router';
import Loader from '@includes/Loader';
import { useState } from 'react';

function Notebook({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => setLoading(true))
  Router.events.on('routeChangeComplete', (url) => setLoading(false))

  return loading ? <Loader/> : <Component {...pageProps} />
}

export default Notebook;