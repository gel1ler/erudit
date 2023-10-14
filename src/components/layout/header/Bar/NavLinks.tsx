import { navigation } from '@/content/content'
import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
    return (
        navigation.map(i =>
            <Box className='flex items-center' key={i.id}>
                {i.anchorLink ?
                    <a href={i.href}>{i.name}</a>
                    :
                    <Link href={i.href}>
                        {i.name}
                    </Link>
                }
            </Box>
        )
    )
}

export default NavLinks