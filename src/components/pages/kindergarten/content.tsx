'use client'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import Contacts from '@/components/pages/Contacts/Contacts'
import Image from 'next/image'
import DirectionCard from './directionCard'

const Content = () => {
    const [program, setProgram] = useState<string>()

    return (
        <>
            <div className='mb-20 flex flex-col items-center gap-16 px-4 '>
                <DirectionCard
                    id='mini'
                    color='#99f6e4'
                    textColor='#115e59'
                    title='Мини сад'
                    dark
                    age='От 3 до 5 лет'
                    time='09:00 - 13:00'
                    price1={1000}
                    priceAll={15500}
                    setProgram={setProgram}
                >
                    <div className="flex flex-col">
                        <Typography variant='h4' data-aos='fade-up'>Увлекательные и развивающие занятия:</Typography>
                        <Typography sx={{ lineHeight: '30px' }} data-aos='fade-up'>
                            - 📖 Чтение интересных сказок и рассказов <br />
                            - 🏃‍♀️ Активные подвижные игры для веселого времяпрепровождения <br />
                            - 🎭 Кукольный театр, который развивает фантазию и креативность <br />
                            - 🖐️ Пальчиковая гимнастика для улучшения мелкой моторики <br />
                            - 🎲 Настольные игры, способствующие дружескому соперничеству <br />
                            - 🎨 Занятия рисованием для раскрытия творческих способностей <br />
                            - 📚 Развивающие уроки раннего обучения (познание, речь и эстетика) <br />
                        </Typography>
                    </div>
                </DirectionCard>

                <DirectionCard
                    id='full'
                    title='Сад полного дня'
                    reversed
                    color='#f0abfc'
                    textColor='#86198f'
                    age='От 3 до 5 лет'
                    time='09:00 - 18:00'
                    price1={1500}
                    priceAll={25500}
                    setProgram={setProgram}
                >
                    <Image
                        src='/kindergarten/full.jpg'
                        width={1280}
                        height={960}
                        className='rounded-[50px] shadowed'
                        alt='Мини-детский сад'
                        data-aos='fade-up'
                    />
                </DirectionCard>

                <DirectionCard
                    id='weekend'
                    title='Сад выходного дня'
                    color='#99f6e4'
                    dark
                    textColor='#115e59'
                    age='От 3 до 5 лет'
                    time='Сб-Вс'
                    price1={1500}
                    priceAll={25500}
                    setProgram={setProgram}
                >
                    <Image
                        src='/kindergarten/weekend.jpg'
                        width={1280}
                        height={960}
                        className='rounded-[50px] shadowed'
                        alt='Мини-детский сад'
                        data-aos='fade-up'
                    />
                </DirectionCard>

                <DirectionCard
                    id='nursery'
                    title='Ясли'
                    color='#fda4af'
                    textColor='#9f1239'
                    reversed
                    age='От 1.5 до 3 лет'
                    time='09:00 - 18:00'
                    price1={1500}
                    priceAll={25500}
                    setProgram={setProgram}
                >
                    <Image
                        src='/kindergarten/nursery.jpg'
                        width={1280}
                        height={960}
                        className='rounded-[50px] shadowed'
                        alt='Мини-детский сад'
                        data-aos='fade-up'
                    />
                </DirectionCard>

            </div>
            <Contacts noAos pageTitle={`Детский сад${program ? ` (${program})` : ''}`} />
        </>
    )
}

export default Content