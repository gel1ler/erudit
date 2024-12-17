import { navigation } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface IText {
    children: string;
    lg?: boolean;
    className?: string;
}

export const Text = ({ children, lg, className }: IText) => {
    return (
        <Typography
            className={'transition-all duration-200 whitespace-nowrap ' + className}
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
            {navigation.map((i, index) => {
                if (i.expanded) {
                    return (
                        <Box key={index} className='relative hidden md:block'>
                            <Link href={i.href} className='peer'>
                                <Text>
                                    {i.name}
                                </Text>
                            </Link>
                            <Box className={`
        absolute top-1/2 left-0 mt-2 transition-all duration-300 z-20 w-max opacity-0 pointer-events-none 
        peer-hover:opacity-100 peer-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto
        min-w-40
      `}>
                                <Box className="bg-white shadowed rounded-lg py-4 pl-4 pr-8 mt-4">
                                    {i.links?.map((item, index) => (
                                        <Link key={index} href={item.href} className='block py-2'>
                                            <Text>
                                                {item.name}
                                            </Text>
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    )
                }

                return (
                    <div
                        key={i.id}
                        className='relative'
                    >
                        <Link href={i.href}>
                            <Text>
                                {i.name}
                            </Text>
                        </Link>
                    </div>
                )
            })}
        </Box >
    );
};

export const DrawerNavLinks = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
    return (
        navigation.map(i =>
            <Link key={i.id} href={i.href} onClick={() => setOpen(false)}>
                <Text>
                    {i.name}
                </Text>
            </Link>
        )
    )
}

export default NavLinks