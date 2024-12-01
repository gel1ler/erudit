import Title from '@/components/UI/text/Title'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { ArrowRightAlt } from '@mui/icons-material'
import Image from 'next/image'

const Kindergarten = () => {
    return (
        <Box id='kindergarten_anchor' className='-mt-[100px] pt-[100px] flex flex-col items-center'>
            <div data-aos='fade-up' className="relative w-fit">
                <Title noAos>Детский сад</Title>
                <Image
                    src='/bg/hat-1.svg'
                    alt='Шапка'
                    width={80}
                    height={80}
                    className='absolute aspect-square w-14 md:w-20 md:-top-5 -right-6 md:-right-8 -top-3'
                />
            </div>
            <Typography data-aos='fade-up' textAlign='center' mt={1} color='gray'>
                Нажмите на карточку для перехода на страницу
            </Typography>
            <div
                data-aos='fade-up'
                className="flex flex-col lg:flex-row mx-auto items-end mt-6 md:mt-10 gap-4"
            >
                <div className="flex flex-col gap-2 items-center bg-rose-300 rounded-xl overflow-hidden relative h-fit py-16 w-full">
                    {/* Icons */}
                    <Image
                        src='/icons/kindergarten/pacifier.svg'
                        width={100}
                        height={100}
                        alt='icon'
                        className='opacity-20 absolute left-8 rotate-[100deg] top-4'
                    />
                    <Image
                        src='/icons/kindergarten/сarriage.svg'
                        width={80}
                        height={80}
                        alt='icon'
                        className='opacity-20 absolute right-2 -rotate-12 bottom-4'
                    />


                    {/* Content */}
                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Ясли
                    </Typography>
                    <Link href='/' className='flex items-center gap-2'>
                        <Typography variant='h5'>
                            С 9:00 до 19:00
                        </Typography>
                        <ArrowRightAlt sx={{ color: '#303030' }} />
                    </Link>
                </div>

                <div className="flex flex-col gap-2 items-center bg-fuchsia-300 rounded-xl pt-8 overflow-hidden relative w-full">
                    {/* Icons */}
                    <Image
                        src='/icons/kindergarten/blocks-black.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -left-8 rotate-[-30deg] top-1/2'
                    />
                    <Image
                        src='/icons/kindergarten/pyramid.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -right-8 rotate-[-120deg] top-0'
                    />

                    {/* Content */}
                    <Typography variant='h3' fontWeight='bold' px={6} textAlign='center'>
                        Полного дня
                    </Typography>
                    <Link href='/' className='flex items-center gap-2'>
                        <Typography variant='h5' textAlign='center'>
                            С 9:00 до 19:00
                        </Typography>
                        <ArrowRightAlt sx={{ color: '#303030' }} />
                    </Link>
                    <div className="relative flex flex-col items-end w-full pt-32 mt-4 overflow-hidden p-4">
                        <Image
                            src='/icons/kindergarten/path.svg'
                            width={650}
                            height={350}
                            alt='icon'
                            className='absolute bottom-0 left-0 z-[1]'
                        />
                        <Link href='/' className='flex items-center gap-2 w-fit'>
                            <Typography variant='h5' zIndex={2} textAlign='end'>
                                С 9:00 до 13:00
                            </Typography>
                            <ArrowRightAlt sx={{ color: '#303030', zIndex: 2 }} />
                        </Link>
                        <Typography variant='h3' fontWeight='bold' zIndex={2} textAlign='end'>
                            Мини-сад
                        </Typography>
                        <div className="rounded-full bg-cyan-400 w-[700px] h-[700px] absolute top-0 left-0" />
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-center bg-emerald-300 rounded-xl overflow-hidden relative h-fit py-16 w-full">
                    {/* Icons */}
                    <Image
                        src='/icons/kindergarten/calendar.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -left-8 rotate-[-30deg] top-1/2'
                    />


                    {/* Content */}
                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Выходного дня
                    </Typography>
                    <Link href='/' className='flex items-center gap-2'>
                        <Typography variant='h5'>
                            Суббота и воскресенье
                        </Typography>
                        <ArrowRightAlt sx={{ color: '#303030' }} />
                    </Link>
                </div>
            </div>
        </Box>
    )
}

export default Kindergarten