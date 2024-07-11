import React from 'react'
import arrowLeft from '@/../public/icons/arrow-left.svg'
import arrowRight from '@/../public/icons/arrow-right.svg'
import Image from 'next/image'
import { Box } from "@mui/material"

export const PhoneIcon = () => {
    return (
        <Image
            src='/icons/phone.svg'
            height={35}
            width={35}
            alt='Phone icon'
        />
    )
}

export const Arrow = ({ anchor, onClick }: { anchor: 'left' | 'right', onClick?: () => void }) => {
    return (
        <Box
            className='absolute top-0 cursor-pointer w-20 h-full bg-transparent transition-transform duration-300 z-10'
            sx={{
                [anchor]: 30,
                ':hover': {
                    transform: `translateX(${anchor === 'left' ? '-' : ''}10px)`
                }
            }}
        >
            <Image
                className="absolute top-1/2 -translate-y-1/2 h-full w-2/3 md:w-full"
                id='arrow'
                style={{
                    [anchor]: 15,
                    filter: 'drop-shadow(0 0 5px rgba(0,0,0, 0.5))',
                }}
                alt='Стрелка'
                src={anchor === 'left' ? arrowLeft : arrowRight}
                onClick={onClick}
            />
        </Box>
    )
}

export default Arrow