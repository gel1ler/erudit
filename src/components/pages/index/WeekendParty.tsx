import Title from '@/components/UI/text/Title'
import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const WeekendParty = () => {
    return (
        <div id='weekend_anchor' className="anchor max-w-6xl grid gap-10 grid-cols-1 lg:grid-cols-2 mx-auto">
            <div className="flex flex-col gap-2">
                <Title
                    sx={{
                        fontWeight: 'regular',
                        fontFamily: 'Balmy, sans-serif',
                        letterSpacing: 2,
                        color: '#0e7490',
                    }}
                    left
                >
                    Weekend Party
                </Title>
                <p data-aos='fade-up' className='text-2xl'>
                    Каждую субботу
                </p>
                <p data-aos='fade-up' className='text-4xl mb-2'>
                    C 10:00 до 14:00
                </p>
                <p data-aos='fade-up' className='text-xl'>
                    Наши Weekend Party — это уникальные тематические мероприятия, динамичные игры и творческие занятия которые создают незабываемые моменты для детей. Для ребят в возрасте от 4 до 9 лет это возможность весело провести время, а для родителей — 4 часа свободного времени, пока их дети наслаждаются активным отдыхом.
                </p>
                <div>
                    <Typography color='gray' variant='h6' data-aos='fade-up'>Стоимость:</Typography>
                    <Typography color='#0e7490' data-aos='fade-up' mt={1} fontWeight={800} variant='h4'>2 000 ₽</Typography>
                    <Typography data-aos='fade-up'>Разовое посещение</Typography>
                    <Typography color='#0e7490' data-aos='fade-up' mt={2} fontWeight={800} variant='h4'>7 000 ₽</Typography>
                    <Typography data-aos='fade-up' mb={3}>Абонемент на месяц</Typography>
                </div>
            </div>
            <div className="p-6">
                <Image
                    data-aos='fade-up'
                    src='/weekend.jpg'
                    alt='Weekend Party'
                    width={1000}
                    height={1500}
                    className='rounded-[50px]'
                />
            </div>
        </div>
    )
}

export default WeekendParty