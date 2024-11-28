// src/app/_app.tsx
import '../styles/globals.css'; // Import global styles if needed
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          {/* <!-- Google tag (gtag.js) --> */} 
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YGZPCFS806"></script> 
          <script          
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];   
                  function gtag(){dataLayer.push(arguments);}   
                  gtag('js', new Date());   
                  gtag('config', 'G-YGZPCFS806');
               `,
            }}   
          />
          {/* Clarity Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c, l, a, r, i, t, y) {
                  c[a] = c[a] || function() {
                    (c[a].q = c[a].q || []).push(arguments);
                  };
                  t = l.createElement(r);
                  t.async = 1;
                  t.src = "https://www.clarity.ms/tag/" + i;
                  y = l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t, y);
                })(window, document, "clarity", "script", "p5nd8jtocs");
              `,
            }}
          />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
