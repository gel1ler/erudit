import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './globals.css'
import './anims.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import AOSProvider from '@/services/AOSProvider'
import { Suspense } from 'react'
import Loader from '../components/layout/loader'
import Loading from '@/components/layout/Loading'
import Script from 'next/script'

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
          <body>
            <Header />
            <section className='flex-grow'>
              <Suspense>
                <Loading />
              </Suspense>
              {children}
            </section>
            <Footer />
          </body>
        </AOSProvider>
      </ThemeRegistry>
    </html>
  )
}