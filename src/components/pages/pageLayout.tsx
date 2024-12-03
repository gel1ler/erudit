import { Box, Typography } from '@mui/material'
import Loader from '@/components/layout/loader'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/pages/Contacts/Contacts'
import { additionalActivities, ECenter } from '@/content/content'
import Image from 'next/image'
import { ReactNode } from 'react'
import Falling from '../layout/Bg/falling'

export default function PageLayout({ id, children, isECenter, pageTitle }: { id: number, children: ReactNode, isECenter?: boolean, pageTitle: string }) {
    const item = isECenter ? ECenter[id] : additionalActivities[id]
    return (
        <>
            <Falling num={100} />
            <Loader />
            <Box className='w-screen overflow-hidden'>
                <Box className='relative flex flex-col gap-4 my-40 max-w-3xl mx-auto'>
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
                    <Box className='flex flex-col gap-6 items-center my-32'>
                        <Title>{item.title}</Title>
                        <Typography textAlign='center' className='w-2/3'>
                            {item.description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='mb-20 flex flex-col items-center gap-16 px-4 z-10 relative'>
                {children}
            </Box>
            <Contacts noAos pageTitle={pageTitle} />
        </>
    )
}
