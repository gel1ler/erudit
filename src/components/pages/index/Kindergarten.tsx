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
                <Title h1 noAos>Детский сад</Title>
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
                {/* 1 */}
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
                        С 9:00 до 19:00
                    </Typography>
                </Link>

                {/* 2 */}
                {/* <div className="overflow-hidden relative w-full h-[440px] rounded-xl">
                    <Link href='/kindergarten#full' className="flex flex-col gap-2 items-center pt-8 w-full h-full z-0
                    bg-fuchsia-300 group hover:bg-fuchsia-400 transition-colors">

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


                        <Typography variant='h3' fontWeight='bold' px={6} textAlign='center'>
                            Полного дня
                        </Typography>
                        <Typography variant='h5' textAlign='center'>
                            С 9:00 до 19:00
                        </Typography>
                    </Link>
                    <Link
                        href='/kindergarten#mini'
                        className="pt-32 mt-4 overflow-hidden p-4 group rounded-full bg-cyan-400 hover:bg-cyan-300 transition-colors w-[700px] h-[700px] absolute left-0 top-[200px]"
                        style={{clipPath: 'circle(50%)'}}
                    >
                        <Image
                            src='/icons/kindergarten/path.svg'
                            width={450}
                            height={250}
                            alt='icon'
                            className='absolute top-4 left-0 z-[1] group-hover:-translate-y-1 transition-transform'
                        />
                        <div className=" w-80 sm:w-96 lg:w-[320px] xl:w-[350px] flex flex-col items-end">
                            <Typography variant='h5' zIndex={2}>
                                С 9:00 до 13:00
                            </Typography>
                            <Typography variant='h3' fontWeight='bold' zIndex={2}>
                                Мини-сад
                            </Typography>
                        </div>
                    </Link>
                </div> */}

                <Link href='/kindergarten#full' className="flex flex-col gap-2 items-center bg-fuchsia-300 group hover:bg-fuchsia-400 transition-colors group rounded-xl overflow-hidden relative h-fit py-16 w-full">
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
                        С 7:00 до 19:00
                    </Typography>
                </Link>

                <Link href='/kindergarten#mini' className="flex flex-col gap-2 items-center bg-cyan-400 hover:bg-cyan-300  transition-colors group rounded-xl overflow-hidden relative h-fit py-24 w-full">
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
                        className='absolute -bottom-4 left-0 z-[1] group-hover:-translate-y-1 transition-transform'
                    />

                    {/* Content */}
                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Мини-сад
                    </Typography>

                    <Typography variant='h5'>
                        С 7:00 до 13:00
                    </Typography>
                </Link>

                {/* 3 */}
                {/* <Link href='/kindergarten#mini' className="flex flex-col gap-2 items-center hover:bg-emerald-400 transition-colors group bg-emerald-300 rounded-xl overflow-hidden relative h-fit py-16 w-full">
                    <Image
                        src='/icons/kindergarten/calendar.svg'
                        width={150}
                        height={150}
                        alt='icon'
                        className='opacity-20 absolute -left-8 rotate-[-30deg] top-1/2 group-hover:-translate-y-2 transition-transform'
                    />


                    <Typography variant='h3' textAlign='center' fontWeight='bold' px={6}>
                        Выходного дня
                    </Typography>

                    <Typography variant='h5'>
                        Суббота и воскресенье
                    </Typography>
                </Link> */}
            </div>
        </Box >
    )
}

export default Kindergarten