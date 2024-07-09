import { Box, Typography, Container } from '@mui/material'
import React from 'react'
import Title from '../UI/text/Title'
import Image from 'next/image'

const News = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 20 }} id='news_anchor' className='anchor'>
            <Box className='w-full anchor flex flex-col items-center gap-4' id='about_anchor'>
                <Title>Новости</Title>
                <Image
                    data-aos='fade-up'
                    className='w-full'
                    alt='vk'
                    src='/vk.png'
                    width={800}
                    height={600}
                />
                <a href='https://vk.com' data-aos='fade-up'>
                    <Typography>
                        Перейти в группу ВК
                    </Typography>
                </a>
            </Box>
        </Container >
    )
}

export default News