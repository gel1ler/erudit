"use client"
import { Box, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ActivityType } from '@/content/types'
import Link from 'next/link'

const Item = ({ index, activity }: { index: Number, activity: ActivityType }) => {
    return (
        <Box
            data-aos='fade-up'
            className={`bg-white py-20 rounded-2xl 
                ${index === 0 || index === 3 ? 'lg:col-span-2' : ''} 
                flex flex-col items-center justify-center gap-4 
                shadowed relative overflow-hidden
                translateToTopTrigger cursor-pointer
                `}
        >
            <div className="absolute -z-0 opacity-35 w-full h-full top-0 left-0 transition-transform duration-500 translateToTop pointer-events-none">
                {activity.icons.map((icon, key) =>
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
            <div className='text-center flex flex-col items-center gap-4'>
                <h2 className="text-4xl font-bold z-10">{activity.title}</h2>
                {activity.subtitle ? <p className="tracking-widest text-gray-600 z-10 -mt-2">{activity.subtitle}</p> : null}
                <p className='w-2/3 z-10'>{activity.description}</p>
                <Link href={activity.href}>
                    <Button
                        variant='outlined'
                        className='w-fit z-10'
                        sx={{
                            borderRadius: '50px',
                            border: '3px solid #303030',
                            mt: 1,
                            px: 2,
                            py: '6px',
                            fontSize: '15px',
                            color: '#303030',
                            '&:hover': {
                                border: '3px solid #303030',
                                backgroundColor: '#303030',
                                color: 'white',
                            }
                        }}
                    >
                        Подробнее
                    </Button>
                </Link>
            </div>
        </Box>
    )
}

export default Item