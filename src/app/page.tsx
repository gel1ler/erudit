import Start from '@/components/index/start/Start'
import type { Metadata } from 'next'
import { Box, Container, Typography } from '@mui/material'
import wait from '@/services/wait'
import Loader from '../components/layout/loader'
import Image from 'next/image'
import Why from '@/components/index/about/Why'
import Bg from '@/components/layout/Bg'
import List from '@/components/index/сonsultations/List'
import Title from '@/components/UI/text/Title'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Детский центр Маленький Эрудит',
  description: 'Детский центр "Маленький Эрудит" - это свой маленький мир для каждого ребенка, где его искренне любят, уважают и всегда ждут!',
}

export default function Home() {

  return (
    <>
      <Loader />
      <Start />
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Box className='w-full anchor' id='about_anchor'>
          <Title>Новости</Title>
          <Image
            alt='vk'
            src='/vk.png'
            width={800}
            height={600}
          />
          <a href='https://vk.com'>
            <Typography>
              Перейти в группу ВК
            </Typography>
          </a>
        </Box>
        <Box className='w-full anchor mb-20' id='services_anchor'>
          <Typography variant='h3' color='secondary' textAlign='center' data-aos='fade-up'>
            Что я предлагаю
          </Typography>
          <List /> 
        </Box>
      </Container>
    </>
  )
}
