import { navigation } from '@/content/content'
import { Box, SxProps, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

type THoverType = 'opacity' | 'color' | 'underline' | 'animUnderline' | 'bold'

interface IText {
    children: string;
    hoverType: THoverType;
    lg?: boolean;
}

const Text = ({ children, hoverType, lg }: IText) => {
    let styles: SxProps = {
        fontSize: lg ? 22 : 18,
    }

    switch (hoverType) {
        case 'opacity':
            styles = { ...styles, ':hover': { opacity: '.3' } }
            break

        case 'color':
            styles = { ...styles, ':hover': { color: '#0060b3' } }
            break

        case 'underline':
            styles = { ...styles, ':hover': { textDecoration: 'underline' } }
            break

        case 'animUnderline':
            styles = {
                ...styles,
                position: 'relative',
                ':after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    transform: 'scaleX(0)',
                    height: '1.5px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#000000',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.2s ease-out',
                },
                ':hover:after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                },
            }
            break
        case 'bold':
            styles = { ...styles, ':hover': { textShadow: '0 0 .65px #333, 0 0 .65px #333' } }


    }


    return (
        <Typography
            className='transition-all duration-200'
            sx={styles}
        >
            {children}
        </Typography>
    )
}

const NavLinks = ({ hoverType }: { hoverType: THoverType }) => {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <Box className='gap-10 items-center hidden xl:flex'>
            {navigation.map(i => (
                <div
                    key={i.id}
                    onMouseEnter={() => setHoveredItem(i.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className='relative'
                >
                    {i.anchorLink ? (
                        <a href={i.href}>
                            <Text hoverType={hoverType}>
                                {i.name}
                            </Text>
                        </a>
                    ) : (
                        <Link href={i.href}>
                            <Text hoverType={hoverType}>
                                {i.name}
                            </Text>
                        </Link>
                    )}
                    {i.expanded && (
                        <Box
                            className='absolute top-1/2 left-0 mt-2  transition-all duration-300 z-20 w-max'
                            sx={{
                                opacity: hoveredItem === i.id ? 1 : 0,
                                pointerEvents: hoveredItem === i.id ? 'all' : 'none',
                            }}
                        >
                            <Box
                                className="bg-white shadowed rounded-lg p-4 mt-4" 
                            >
                                {i.links?.map(link => (
                                    <Link key={link.id} href={link.href} className='block py-2'>
                                        <Text hoverType={hoverType}>
                                            {link.name}
                                        </Text>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    )}
                </div>
            ))}
        </Box>
    );
};

// const NavLinks = ({ hoverType }: { hoverType: THoverType }) => {
//     return (
//         <Box className='gap-10 items-center hidden xl:flex'>
//             {navigation.map(i =>
//                 i.anchorLink ?
//                     <a key={i.id} href={i.href}>
//                         <Text hoverType={hoverType}>
//                             {i.name}
//                         </Text>
//                     </a>
//                     :
//                     <Link key={i.id} href={i.href}>
//                         <Text hoverType={hoverType}>
//                             {i.name}
//                         </Text>
//                     </Link>
//             )}
//         </Box >
//     )
// }

export const DrawerNavLinks = ({ hoverType, setOpen }: { hoverType: THoverType, setOpen: (value: boolean) => void }) => {
    return (
        <>
            {navigation.map(i =>
                i.anchorLink ?
                    <a key={i.id} href={i.href} onClick={() => setOpen(false)}>
                        <Text hoverType={hoverType}>
                            {i.name}
                        </Text>
                    </a>
                    :
                    <Link key={i.id} href={i.href} onClick={() => setOpen(false)}>
                        <Text hoverType={hoverType}>
                            {i.name}
                        </Text>
                    </Link>
            )}
        </>
    )
}

export default NavLinks