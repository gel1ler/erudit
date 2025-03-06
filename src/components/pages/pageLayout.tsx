import { Box, Typography } from '@mui/material'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/pages/Contacts/Contacts'
import { additionalActivities, ECenter } from '@/content/content'
import Image from 'next/image'
import { ReactNode } from 'react'
import Falling from '../layout/Bg/falling'
import Link from 'next/link'

export default function PageLayout({ children, isECenter, pageTitle, noContacts }: { children: ReactNode, isECenter?: boolean, pageTitle: string, noContacts?: boolean }) {
    const item = isECenter ? ECenter.find(i => i.title === pageTitle) : additionalActivities.find(i => i.title === pageTitle)

    if (!item) {
        return <div className='w-screen h-[70vh] flex flex-col justify-center items-center gap-4'>
            <Typography variant='h2'>Ошибка 404</Typography>
            <Link href='/' className='text-xl'>🠔На главную</Link>
        </div>
    }

    return (
        <>
            <Falling num={33} />
            <Box className='w-screen overflow-hidden flex h-[90vh]'>
                <Box className='relative flex flex-col gap-4 my-auto max-w-3xl mx-auto'>
                    <div className="absolute opacity-35 w-full h-full top-0 left-0 transition-transform duration-500 translateToTop">
                        {item.icons.map((icon, key) =>
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
                    <Box className='flex flex-col gap-6 items-center my-32 min-w-[40vw]'>
                        <Title h1>{item.title}</Title>
                        <Typography textAlign='center' className='w-2/3'>
                            {item.description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='mb-20 flex flex-col items-center gap-16 px-4 z-10 relative'>
                {children}
            </Box>
            {noContacts ? null : <Contacts noAos pageTitle={pageTitle} />}
        </>
    )
}
