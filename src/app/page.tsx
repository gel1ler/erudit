import Carousel from '@/components/UI/carousel/Carousel'
import Start from '@/components/start/Start'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Start />
      <Box className='h-screen w-full anchor' id='about'>
        <Carousel arrows thumbnails dots autoplay />
      </Box>
    </>
  )
}
