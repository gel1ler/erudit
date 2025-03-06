import Start from '@/components/pages/index/start/Start'
import type { Metadata } from 'next'
import { Box } from '@mui/material'
import Loader from '../components/layout/loader_march'
import Bg from '@/components/layout/Bg/Bg'
import { Book2, Book3, Book4, Book5, Book6 } from '../../public/bg/books'
import Groups from '@/components/pages/index/groups/Groups'
import Gallery from '@/components/pages/index/Gallery'
import Ratings from '@/components/pages/index/Ratings'
import FAQ from '@/components/pages/index/FAQ'
import Bg2 from '@/components/layout/Bg/Bg2'
import Contacts from '@/components/pages/Contacts/Contacts'
import News from '@/components/pages/index/news/News'
import Script from 'next/script'
import ECenterActivities from '@/components/pages/index/ECenterActivities/ECenterActivities'
import AdditionalActivities from '@/components/pages/index/additionalActivities/AdditionalActivities'
import Kindergarten from '@/components/pages/index/Kindergarten'
// import Falling from '@/components/layout/Bg/falling'
// import NewYearPromo from '@/components/pages/index/Promo/NewYearPromo'
import WeekendParty from '@/components/pages/index/WeekendParty'
// import Promo23Feb from '@/components/pages/index/Promo/Promo23Feb'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Маленький эрудит — Частный Детский сад и Развивающий центр в Жуковском',
  description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
  keywords: 'детский центр, развивающий центр, Жуковский, Маленький Эрудит, занятия для детей, подготовка к школе',
  openGraph: {
    title: 'Маленький эрудит — Частный Детский сад и Развивающий центр в Жуковском',
    description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
    url: 'https://small-erudite.ru', // Замените на ваш реальный URL
    siteName: 'Маленький Эрудит',
    images: [
      {
        url: 'https://small-erudite.ru/start/girl.jpg', // Замените на ваш реальный URL изображения
        width: 1200,
        height: 630,
        alt: 'Детский развивающий центр "Маленький Эрудит"',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export default function Home() {
  return (
    <>
      <Loader />
      <Start />
      {/* <Promo23Feb /> */}

      {/* НОВВЫЙ ГОД

      <NewYearPromo />
      <Falling num={101} />

      НОВВЫЙ ГОД */}

      <Box className='relative flex flex-col gap-40 pb-40'>
        <Bg>
          {/* <Book2 /> */}
          <Image
            src='/march-8/bouquet.svg' 
            className='absolute top-10 right-10'
            width={300}
            height={300}
            alt='Букет'
          />
        </Bg>
        <News />
        <Groups />
        <Kindergarten />
        <AdditionalActivities />
        <ECenterActivities />
        <WeekendParty />
      </Box>
      <Box className='relative flex flex-col gap-40'>
        <Bg2>
          <Book3 />
          <Book4 />
          <Book5 />
          <Book6 />
        </Bg2>
        <Gallery />
        <Ratings />
        <FAQ />
        <Contacts pageTitle='Главная' />
      </Box>
      <Script src="https://app.getreview.io/tags/i3Wn3no9PQjCp1N0/sdk.js" async />
    </>
  )
}