import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ title, text, img, id }: { title: string, text: string, img: string, id: number }) => {
  const slicedText = text.length > 249 ? text.slice(0, 250) + '...' : text

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
      <Typography variant='body1' textAlign='center' sx={{ px: 1 }}>
        {slicedText}
      </Typography>
      <Link href={`/groups/${id}`}>
        <Button
          variant='outlined'
          className='w-fit'
          sx={{
            borderRadius: '50px',
            border: '3px solid #fff',
            mt: 1,
            px: 2,
            py: '6px',
            fontSize: '15px',
            '&:hover': {
              border: '3px solid #fff',
              backgroundColor: '#fff',
              color: 'text.primary',
            }
          }}
        >
          Подробнее
        </Button>
      </Link>
    </Box >
  )
}

export default Card