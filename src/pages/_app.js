
import "@/styles/globals.css";
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ICITR - 2024</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
