import { navigation } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface IText {
    children: string;
    lg?: boolean;
}

export const Text = ({ children, lg }: IText) => {
    return (
        <Typography
            className='transition-all duration-200'
            sx={{
                fontSize: lg ? 21 : 17,
                ':hover': { color: '#0060b3' }
            }}
        >
            {children}
        </Typography>
    )
}

const NavLinks = () => {
    return (
        <Box className='gap-8 items-center hidden lg:flex'>
            {navigation.map(i => (
                <div
                    key={i.id}
                    className='relative'
                >
                    {i.anchorLink ? (
                        <a href={i.href}>
                            <Text>
                                {i.name}
                            </Text>
                        </a>
                    ) : (
                        <Link href={i.href}>
                            <Text>
                                {i.name}
                            </Text>
                        </Link>
                    )}
                </div>
            ))}
        </Box>
    );
};

export const DrawerNavLinks = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
    return (
        <>
            {navigation.map(i =>
                i.anchorLink ?
                    <a key={i.id} href={i.href} onClick={() => setOpen(false)}>
                        <Text>
                            {i.name}
                        </Text>
                    </a>
                    :
                    <Link key={i.id} href={i.href} onClick={() => setOpen(false)}>
                        <Text>
                            {i.name}
                        </Text>
                    </Link>
            )}
        </>
    )
}

export default NavLinks