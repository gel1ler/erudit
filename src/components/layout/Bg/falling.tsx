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
            src={`/start/snowflakes/snowflake-${rand(8)}.svg`}
            alt='Cнежинка'
            className={`falling ${sm ? 'falling-sm' : ''}`}
            width={64}
            height={64}
            style={{
                left: `${left}%`,
                animationDelay: `${num == 0 ? -3 :
                    num == 1 ? -2 :
                        num}s`,
                rotate: rotate + 'deg',
            }}
            unoptimized
        />
    )
}

const Falling = ({ num }: { num: number }) => {
    return (
        <Box
            className='absolute w-screen h-full left-0 top-0 bottom-0 overflow-hidden pointer-events-none opacity-60'
        >
            {Array(num).fill(0).map((i, key) =>
                <Element key={key} num={key} sm={num < 120} />
            )}
        </Box>
    )
}

export default Falling