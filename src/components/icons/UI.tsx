import IB from "./IB"
import { Menu } from '@mui/icons-material'
import React from 'react'
import arrowLeft from '@/../public/icons/arrow-left.svg'
import arrowRight from '@/../public/icons/arrow-right.svg'
import Image from 'next/image'
import { Box } from "@mui/material"

const style = { fontSize: 30 }

export const MenuIcon = ({ setOpen }: { setOpen: () => void }) => { return (<IB f={setOpen}><Menu sx={style} /></IB>) }

export const Arrow = ({ anchor, f }: { anchor: 'left' | 'right', f: () => void }) => {
    return (
        <Box
            className='absolute top-1/2 cursor-pointer -translate-y-1/2 transition-all duration-300'
            sx={{
                [anchor]: 15,
                filter: 'drop-shadow(0 0 5px rgba(0,0,0, 0.5))',
                ':hover': {
                    [anchor]: 5,
                }
            }}
        >
            <Image
                onClick={f}
                alt='Стрелка'
                src={anchor === 'left' ? arrowLeft : arrowRight}
                width={50}
                height={50}
            />
        </Box>
    )
}

export default Arrow