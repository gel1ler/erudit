import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Card = ({ title, text, img }: { title: string, text: string, img: string }) => {
  return (
    <Box data-aos='fade-up' className='max-w-xs flex flex-col items-center gap-2'>
      <Image
        src={img}
        width={350}
        height={350}
        alt='Фото группы'
        className='rounded-xl w-full aspect-square object-cover'
      />
      <Typography variant='h4' textAlign='center' fontWeight='bold'>
        {title}
      </Typography>
      <Typography variant='body1' textAlign='center'>
        {text}
      </Typography>
      <Button
        sx={{
          background: '#F7631E',
          borderRadius: 60,
          px: 3,
          py: 1,
          mt: 1,
          ":hover": {
            background: '#f34723',
          }
        }}
      >
        Подробнее
      </Button>
    </Box >
  )
}

export default Card