import { Typography } from '@mui/material'
import Title from '@/components/UI/text/Title'
import Image from 'next/image'
import { Metadata } from 'next'
import Falling from '@/components/layout/Bg/falling'
import { IconsType } from '@/content/types'
import Content from '@/components/pages/kindergarten/content'

export const metadata: Metadata = {
    title: 'Маленький Эрудит - Частный детский сад город Жуковский',
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

export default function Page() {
    return (
        <>
            <Falling num={33} />
            
            <div className='w-screen overflow-hidden h-screen flex'>
                <div className='relative flex flex-col gap-4 my-auto max-w-3xl mx-auto'>
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
                    <div className='flex flex-col gap-6 items-center my-44 px-2'>
                        <Title h1>Детский сад Эрудит</Title>
                        <Typography textAlign='center' variant='h6'>
                            Увлекательное и развивающее пространство для ваших детей, где они смогут раскрыть свой потенциал, обрести новых друзей и получить качественное дошкольное образование.
                        </Typography>
                    </div>
                </div>
            </div>
            <Content />
        </>
    )
}