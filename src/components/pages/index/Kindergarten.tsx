import Title from '@/components/UI/text/Title'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Kindergarten = () => {
    return (
        <Box id='kindergarten_anchor' className='-mt-[100px] pt-[100px] flex flex-col items-center'>
            <div data-aos='fade-up' className="relative w-fit">
                <Title noAos>Детский сад</Title>
                {/* <Image
                    src='/bg/hat-1.svg'
                    alt='Шапка'
                    width={80}
                    height={80}
                    className='absolute aspect-square w-14 md:w-20 md:-top-5 -right-6 md:-right-8 -top-3'
                /> */}
                <Image
                    src='/march-8/daffodil.svg'
                    alt='Шапка'
                    width={100}
                    height={100}
                    className='absolute aspect-square w-14 md:w-20 md:-top-5 -right-12 md:-right-14 -top-3 -z-10'
                />
            </div>
            <Typography data-aos='fade-up' textAlign='center' mt={1} color='gray'>
                Нажмите на карточку для перехода на страницу
            </Typography>
            <div
                data-aos='fade-up'
                className="flex flex-col lg:flex-row mx-auto items-end mt-6 md:mt-10 gap-4"
            >
                <Link href='/kindergarten#nursery' className="flex flex-col gap-2 items-center overflow-hidden relative h-fit w-full rounded-xl 
                py-16 bg-rose-300 hover:bg-rose-400 transition-colors group cursor-pointer">
                    {/* Icons */}
                    <Image
                        src='/icons/kindergarten/pacifier.svg'
                        width={100}
                        height={100}
                        alt='icon'
                        className='opacity-20 absolute left-8 rotate-[100deg] top-4 group-hover:top-2 transition-[top]'
                    />
                    <Image
                        src='/icons/kindergarten/сarriage.svg'
                        width={80}
                        height={80}
                        alt='icon'
                        className='opacity-20 absolute right-2 -rotate-12 bottom-4 group-hover:bottom-5 transition-[bottom]'
                    />


                    {/* Content */}
                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Ясли
                    </Typography>
                    <Typography variant='h5'>
                        С 8:00 до 19:00
                    </Typography>
                </Link>

                <Link href='/kindergarten#mini' className="flex flex-col gap-2 items-center bg-cyan-400 hover:bg-cyan-300  transition-colors group rounded-xl overflow-hidden relative h-fit py-16 w-full">
                    {/* Icons */}
                    <Image
                        src='/icons/kindergarten/calendar.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -left-8 rotate-[-30deg] -top-2 group-hover:-translate-y-2 transition-transform'
                    />
                    <Image
                        src='/icons/kindergarten/path.svg'
                        width={450}
                        height={250}
                        alt='icon'
                        className='absolute -bottom-4 left-0 opacity-70 group-hover:-translate-y-1 transition-transform'
                    />

                    {/* Content */}
                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Мини-сад
                    </Typography>

                    <Typography variant='h5'>
                        С 9:00 до 13:00
                    </Typography>
                </Link>

                <Link href='/kindergarten#full' className="flex flex-col gap-2 items-center bg-fuchsia-300 group hover:bg-fuchsia-400 transition-colors group rounded-xl overflow-hidden relative h-fit py-24 w-full">
                    {/* Icons */}
                    <Image
                        src='/icons/kindergarten/blocks-black.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -left-8 rotate-[-30deg] top-1/2 group-hover:-translate-y-2 transition-transform'
                    />
                    <Image
                        src='/icons/kindergarten/pyramid.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -right-8 rotate-[-120deg] top-0 group-hover:-translate-y-1 transition-transform'
                    />


                    {/* Content */}
                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Полного дня
                    </Typography>

                    <Typography variant='h5'>
                        С 8:00 до 19:00
                    </Typography>
                </Link>
            </div>
        </Box >
    )
}

export default Kindergarten