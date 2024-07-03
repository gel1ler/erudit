import Start from '@/components/index/start/Start'
import type { Metadata } from 'next'
import { Box } from '@mui/material'
import Loader from '../components/layout/loader'
import Bg from '@/components/layout/Bg'
import { Book1, Book2, Book3, Book4, Book5, Book6 } from '../../public/bg/books'
import News from '@/components/index/News'
import Groups from '@/components/index/groups/Groups'
import Gallery from '@/components/index/Gallery'
import Ratings from '@/components/index/Ratings'
import FAQ from '@/components/index/FAQ'
import Bg2 from '@/components/layout/Bg2'
import Contacts from '@/components/index/Contacts'

export const metadata: Metadata = {
  title: 'Детский центр Маленький Эрудит',
  description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {

  return (
    <>
      <Loader />
      <Start />
      <Box className='relative flex flex-col gap-40 pb-40'>
        <Bg>
          <Book1 />
          <Book2 />
        </Bg>
        <News />
        <Groups />
      </Box>
      <Box className='relative flex flex-col gap-40 pb-40'>
        <Bg2>
          <Book3 />
          <Book4 />
          <Book5 />
          <Book6 />
        </Bg2>
        <Gallery />
        <Ratings />
        <FAQ />
        <Contacts />
      </Box>
    </>
  )
}
