import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './globals.css'
import './anims.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import AOSProvider from '@/services/AOSProvider'
import { Suspense } from 'react'
import Loading from '@/components/layout/Loading'
import Script from 'next/script'
import Loader from '../components/layout/loaderMarch'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/svg+xml" />
        <link rel='image/svg+xml' href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="any" />
      </head>
      <ThemeRegistry>
        <AOSProvider>
          <body className='relative'>
            <Loader />
            <Header />
            <section className='flex-grow'>
              <Suspense>
                <Loading />
              </Suspense>
              {children}
            </section>
            <Footer />
            <SpeedInsights />
            <Analytics />
          </body>
        </AOSProvider>
      </ThemeRegistry>
      {/* Яндекс.Метрика */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98564600, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `,
        }}
      />
    </html>
  )
}