import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Exo_2 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
const font = Exo_2({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
import { MenuProvider } from '../context/Navbar'
import * as gtag from "../gtag.js"
import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <MenuProvider>
        <main className={font.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </MenuProvider>
    </>
  )
}
