import Image from 'next/image'
import React from 'react'

export const Snowflake = ({ num, lg, className }: { num: number, lg?: boolean, className?: string }) => {
    const size = 60 * (lg ? 3 : 1)
    return (
        <Image
            alt='snowflake icon'
            src={`/start/snowflakes/snowflake-${num}.svg`}
            width={size}
            height={size}
            className={className}
        />
    )
}
