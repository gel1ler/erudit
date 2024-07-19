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
            <Title>Отзывы на Яндексе</Title>
            <Box className='w-full flex flex-col-reverse lg:flex-row gap-16 lg:gap-0 items-center'>
                <Box data-aos='fade-up' className='flex flex-col justify-center mx-auto gap-16'>
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
                <div className='w-full max-w-xl h-[660px] overflow-hidden relative px-5'>
                    <iframe
                        style={{ width: '100%', height: '100%', border: '1px solid #e6e6e6', borderRadius: 8, boxSizing: 'border-box' }}
                        src="https://yandex.ru/maps-reviews-widget/1108324675?comments"
                    />
                    <a
                        href="https://yandex.ru/maps/org/malenkiy_erudit/1108324675/"
                        target="_blank"
                        style={{
                            boxSizing: 'border-box',
                            textDecoration: 'none',
                            color: '#b3b3b3',
                            fontSize: 10,
                            fontFamily: 'YS Text,sans-serif',
                            padding: '0 20px',
                            position: 'absolute',
                            bottom: 8,
                            width: '100%',
                            textAlign: 'center',
                            left: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block',
                            maxHeight: 14,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Маленький Эрудит на карте Жуковского — Яндекс Карты
                    </a>
                </div>
            </Box>
        </Container>
    )
}

export default Ratings