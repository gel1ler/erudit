import { MoreBtn } from '@/components/UI/form/Buttons'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Card = ({ title, text, img, id }: { title: string, text: string, img: string, id: number }) => {
  // const slicedText = text.length > 249 ? text.slice(0, 250) + '...' : text

  return (
    <Box data-aos='fade-up' className='max-w-xs flex flex-col items-center gap-2'>
      <Image
        src={img}
        width={450}
        height={450}
        alt='Фото группы'
        className='rounded-xl w-full aspect-square object-cover shadow bg-center'
      />
      <Typography variant='h4' textAlign='center' fontWeight='bold'>
        {title}
      </Typography>
      <Typography variant='h5' textAlign='center' sx={{ px: 1 }}>
        - 9 свободных мест<br />

      </Typography>
      <div className="flex gap-2">
        <MoreBtn dark href={`/groups/${id}`} text='Расписание' />
        <MoreBtn dark href={`/groups/${id}`} />
      </div>
    </Box >
  )
}

export default Card