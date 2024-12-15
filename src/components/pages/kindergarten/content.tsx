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
                    age='От 3 до 6 лет'
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
                    additional
                    id='full'
                    title='Сад полного дня'
                    reversed
                    dark
                    color='#f0abfc'
                    textColor='#86198f'
                    age='От 3 до 6 лет'
                    time='08:00 - 19:00'
                    price1={2000}
                    priceAll={35000}
                    setProgram={setProgram}
                >
                    <Image
                        src='/kindergarten/full.jpg'
                        width={1280}
                        height={960}
                        className='rounded-[50px]'
                        alt='Сад полного дня'
                        data-aos='fade-up'
                    />
                </DirectionCard>

                {/* <DirectionCard
                    id='weekend'
                    title='Weekend party'
                    color='#99f6e4'
                    dark
                    textColor='#115e59'
                    age='От 4 до 9 лет'
                    time='Сб 10:00 - 14:00'
                    price1={2000}
                    //Абонемент действует на протяжении 1,5 месяцев
                    //Тематическая вечеринка

                    priceAll={7000}
                    setProgram={setProgram}
                >
                    <Image
                        src='/kindergarten/weekend.jpg'
                        width={1280}
                        height={960}
                        className='rounded-[50px]'
                        alt='Мини-детский сад'
                        data-aos='fade-up'
                    />
                </DirectionCard> */}

                <DirectionCard
                    additional
                    id='nursery'
                    title='Ясли'
                    color='#fda4af'
                    textColor='#9f1239'
                    reversed
                    age='От 1.5 до 3 лет'
                    time='08:00 - 19:00'
                    price1={2000}
                    priceAll={35000}
                    setProgram={setProgram}
                >
                    <Image
                        src='/kindergarten/nursery.jpg'
                        width={1280}
                        height={960}
                        className='rounded-[50px]'
                        alt='Ясли'
                        data-aos='fade-up'
                    />
                </DirectionCard>

            </div>
            <Contacts noAos pageTitle={`Детский сад${program ? ` (${program})` : ''}`} />
        </>
    )
}

export default Content