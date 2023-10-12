import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Start from '@/components/start/Start'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Start />
      <Box className='h-screen w-full' />
    </>
  )
}
