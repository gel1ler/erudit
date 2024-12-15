import Start from '@/components/pages/index/start/Start'
import type { Metadata } from 'next'
import { Box } from '@mui/material'
import Loader from '../components/layout/loader'
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
import Falling from '@/components/layout/Bg/falling'
import NewYearPromo from '@/components/pages/index/NewYearPromo'

export const metadata: Metadata = {
  title: 'Маленький эрудит — Детский развивающий центр для детей от 1 до 6 лет. Жуковский.',
  description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {
  return (
    <>
      <Loader />
      <Start />
      <NewYearPromo />
      <Falling num={101} />
      <Box className='relative flex flex-col gap-40 pb-40'>
        <Bg>
          <Book2 />
        </Bg>
        <News />
        <Groups />
        <Kindergarten />
        <AdditionalActivities />
        <ECenterActivities />
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
