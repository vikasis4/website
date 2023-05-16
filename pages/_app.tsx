import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Exo_2 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
const font = Exo_2({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
import { MenuProvider } from '../context/Navbar'
// weight:'400'
// weight: ['100', '200', '300', '400', '500', '600', '700'],

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <main className={font.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </MenuProvider>
  )
}
