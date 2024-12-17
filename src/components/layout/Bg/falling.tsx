import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const Element = ({ num, sm }: { num: number, sm?: boolean }) => {
    const rand = (max: number) => Math.floor(Math.random() * max)
    const left = rand(100)
    const rotate = rand(360)

    return (
        <Image
            loading='lazy'
            src={`/start/snowflakes/snowflake-${rand(3)}.svg`}
            alt='Cнежинка'
            className={sm ? 'falling-sm' : 'falling'}
            width={65}
            height={65}
            quality={1}
            style={{
                left: `${left}%`,
                animationDelay: `${num * 3 - 3}s`,
                rotate: rotate + 'deg',
            }}
        />
    )
}

const Falling = ({ num }: { num: number }) => {
    return (
        <Box
            className='absolute w-screen h-full left-0 top-0 bottom-0 overflow-hidden pointer-events-none opacity-70'
            sx={{ zIndex: 0 }}
        >
            {Array(num).fill(0).map((i, key) =>
                <Element key={key} num={key} sm={num < 101} />
            )}
        </Box>
    )
}

export default Falling