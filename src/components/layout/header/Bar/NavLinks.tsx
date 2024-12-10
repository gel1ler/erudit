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
            className='transition-all duration-200 whitespace-nowrap'
            sx={{
                fontSize: lg ? 21 : 17,
                ':hover': { color: '#0060b3' }
            }}
        >
            {children}
        </Typography>
    )
}

export const additionalArr = [
    { name: 'Новости', href: '/news' },
    { name: 'Галерея', href: '/gallery' },
    { name: 'Кружки', href: '/art' },
    { name: 'Проведение дней рождений', href: '/birthdays' },
    { name: 'Логопед', href: '/speech' },
    { name: 'Психолог', href: '/psychology' },
]

const Additional = () =>
    <Box className='relative hidden md:block'>
        <div className='peer cursor-pointer'>
            <Text>
                Дополнительно
            </Text>
        </div>
        <Box className={`
        absolute top-1/2 left-0 mt-2 transition-all duration-300 z-20 w-max opacity-0 pointer-events-none 
        peer-hover:opacity-100 peer-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto
        min-w-40
      `}>
            <Box className="bg-white shadowed rounded-lg py-4 pl-4 pr-8 mt-4">
                {additionalArr.map((item, index) => (
                    <Link key={index} href={item.href} className='block py-2'>
                        <Text>
                            {item.name}
                        </Text>
                    </Link>
                ))}
            </Box>
        </Box>
    </Box>

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
            <Additional />
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
                    <>
                        <Link key={i.id} href={i.href} onClick={() => setOpen(false)}>
                            <Text>
                                {i.name}
                            </Text>
                        </Link>
                    </>
            )}
        </>
    )
}

export default NavLinks