import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
       <Script 
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-156570061-1`}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-156570061-1');
          `
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
