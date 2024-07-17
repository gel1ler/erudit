import React from 'react'
import Title from '../../UI/text/Title'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

const Block = ({ title, text, className, color }: { title: string, text: string, className?: string, color?: string }) =>
    <Box className='flex flex-col items-center'>
        <Typography
            className={className}
            sx={{ width: 'fit-content' }}
            textAlign='center'
            variant='h2'
            fontWeight='bold'
            color={color}
        >
            {title}
        </Typography>
        <Typography variant='h6' textAlign='center'>
            {text}
        </Typography>
    </Box>

const Ratings = () => {
    return (
        <Container
            id='ratings_anchor'
            className='anchor'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                justifyContent: 'center'
            }}
        >
            <Title>Отзывы на Яндексе 4,8</Title>
            <Image
                data-aos='fade-up'
                width={1180}
                height={259}
                src='/ratings.png'
                alt='Отзывы'
                className='w-full'
            />
            <Box data-aos='fade-up' className='flex w-full justify-around mx-auto' sx={{ flexDirection: ['column', 'row'], gap: [4, 0] }}>
                <Block
                    title='200+'
                    text='Счастливых детей в год'
                    className='grad-text1'
                />
                <Block
                    title='50+'
                    text='Увлекательных занятий'
                    color='#BD14D2'
                />
                <Block
                    title='100%'
                    text='Довольных родителей'
                    className='grad-text2'
                />
            </Box>
        </Container>
    )
}

export default Ratings