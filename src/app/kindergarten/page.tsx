import { Box, Typography } from '@mui/material'
import Loader from '@/components/layout/loader'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/pages/Contacts/Contacts'
import Image from 'next/image'
import { Metadata } from 'next'
import Falling from '@/components/layout/Bg/falling'
import { IconsType } from '@/content/types'
import { MoreBtn } from '@/components/UI/form/Buttons'
import { ReactNode } from 'react'
import { formatMoney } from '@/services/services'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Детский сад',
    description: 'Добро пожаловать в наш детский сад! Мы предлагаем увлекательное и развивающее пространство для ваших детей, где они смогут раскрыть свой потенциал, обрести новых друзей и получить качественное дошкольное образование.',
}

const icons: IconsType[] = [
    {
        src: '/icons/kindergarten/blocks.svg',
        position: ['', '', 20, 30],
        size: 100,
        rotate: -30
    },
    {
        src: '/icons/kindergarten/balloon.svg',
        position: [-10, 10, '', ''],
        size: 120,
        rotate: 30
    },
    {
        src: '/icons/kindergarten/boat.svg',
        position: ['', -5, -20, ''],
        size: 150,
        rotate: -30
    },
    {
        src: '/icons/kindergarten/play.svg',
        position: [40, '', '', '15%'],
        size: 150,
        rotate: -30
    },
]



const DirectionCard = ({
    title, age, time, price1, priceAll, children, dark, color, textColor, reversed, id
}: {
    title: string, age: string, time: string, price1: number, priceAll: number, children: ReactNode, dark?: boolean, color: string, textColor: string, reversed?: boolean, id: string
}) => {
    const side = reversed ? 'right' : 'left'

    return (
        <div className={`w-screen ${dark ? 'bg-slate-100 py-20' : 'py-10'}`} id={id}>
            <div className={`grid gap-10 max-w-5xl mx-auto ${reversed ? 'grid-cols-[2fr_1.5fr]' : 'grid-cols-[1.5fr_2fr]'}`}>
                <div className={`flex flex-col ${reversed ? 'order-last items-end' : ''}`}>
                    <div className="flex items-center gap-4" data-aos='fade-up'>
                        <Typography className='w-fit px-2 py-[2px] rounded-full' style={{ background: color }} variant='subtitle1' fontWeight={700}>{time}</Typography>
                        <Typography color='gray' variant='h6' fontWeight={700}>{age}</Typography>
                    </div>
                    <Title sx={{ textAlign: side }}>{title}</Title>

                    <div className="ml-2 mt-4">
                        <Typography textAlign={side} color='gray' variant='h6' data-aos='fade-up'>Стоимость:</Typography>
                        <Typography textAlign={side} data-aos='fade-up' color={textColor} mt={1} fontWeight={800} variant='h5'>{formatMoney(price1)} ₽</Typography>
                        <Typography textAlign={side} data-aos='fade-up'>Разовое посещение</Typography>
                        <Typography textAlign={side} data-aos='fade-up' color={textColor} mt={2} fontWeight={800} variant='h5'>{formatMoney(priceAll)} ₽</Typography>
                        <Typography textAlign={side} data-aos='fade-up' mb={3}>Абонемент на месяц</Typography>
                    </div>
                    <MoreBtn aos href='#contacts_anchor' text='Записаться' />
                </div>
                {children}
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <>
            <Falling num={33} />
            <Loader />
            <Box className='w-screen overflow-hidden h-screen'>
                <Box className='relative flex flex-col gap-4 my-40 max-w-3xl mx-auto'>
                    <div className="absolute opacity-35 w-full h-full top-0 left-0 transition-transform duration-500 translateToTop">
                        {icons.map((icon, key) =>
                            <Image
                                key={key}
                                src={icon.src}
                                alt='Иконка эрудит центр'
                                width={icon.size}
                                height={icon.size}
                                className={`absolute ${icon.noMd ? 'hidden lg:block' : ''}`}
                                style={{
                                    top: icon.position[0], right: icon.position[1], bottom: icon.position[2], left: icon.position[3],
                                    transform: `rotate(${icon.rotate}deg)`,
                                    opacity: icon.opacity ? icon.opacity : 'unset'
                                }}
                            />
                        )}
                    </div>
                    <Box className='flex flex-col gap-6 items-center my-44'>
                        <Title>Детский сад Эрудит</Title>
                        <Typography textAlign='center' variant='h6'>
                            Увлекательное и развивающее пространство для ваших детей, где они смогут раскрыть свой потенциал, обрести новых друзей и получить качественное дошкольное образование.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='mb-20 flex flex-col items-center gap-16 px-4 z-10 relative'>
                <DirectionCard
                    id='mini'
                    color='#99f6e4'
                    textColor='#115e59'
                    title='Мини сад'
                    age='От 3 до 5 лет'
                    time='09:00 - 13:00'
                    price1={1000}
                    priceAll={15500}
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
                    dark
                    time='09:00 - 18:00'
                    price1={1500}
                    priceAll={25500}
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
                    textColor='#115e59'
                    age='От 3 до 5 лет'
                    time='09:00 - 18:00 (Сб-Вс)'
                    price1={1500}
                    priceAll={25500}
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

            </Box>
            <Contacts noAos pageTitle="Детский сад" />
        </>
    )
}