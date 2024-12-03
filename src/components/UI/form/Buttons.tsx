import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import AnchorLink from '@/components/UI/anchorLink'
import Image from 'next/image'

export const EnrollButton = ({ dark }: { dark?: boolean }) => {
    return (
        <AnchorLink href='#contacts_anchor'>
            <Button
                variant='outlined'
                className='w-fit'
                sx={{
                    borderRadius: '50px',
                    py: '10px',
                    border: `3px solid ${dark ? '#303030' : '#fff'}`,
                    px: 4,
                    fontSize: '15px',
                    color: dark ? '#303030' : '#fff',
                    '&:hover': {
                        border: '3px solid #fff',
                        backgroundColor: dark ? '#303030' : '#fff',
                        color: dark ? '#fff' : '#303030',
                    }
                }}
            >
                Пробное занятие
            </Button>
        </AnchorLink >
    )
}

export const ContactsButton = ({ drawer, onClick, text }: { drawer?: boolean, onClick?: () => void, text?: boolean }) =>
    <AnchorLink href='#contacts_anchor'>
        <Button
            onClick={onClick}
            sx={{
                borderRadius: 100,
                p: 1,
                px: text ? [2, 3] : '',
                color: 'white',
                background: 'linear-gradient(to right, #CE02CF, #0ED0F8)',
                transition: 'background .3s ease-out',
                display: drawer ? "block" : ['none', 'block'],
            }}
        >
            {text ? 'Контакты' :
                <Image
                    src='/icons/phone-2.svg'
                    alt='Телефон'
                    width={30}
                    height={30}
                    className='mx-auto'
                />
            }
        </Button>
    </AnchorLink>


export const MoreBtn = ({ click, href, text }: { click?: () => void, href?: string, text?: string }) => {
    text = text || 'подробнее';
    if (href) {
        return (
            <Link href={href}>
                <Button
                    variant='outlined'
                    className='w-fit z-10'
                    sx={{
                        borderRadius: '50px',
                        border: '3px solid #303030',
                        mt: 1,
                        px: 2,
                        py: '6px',
                        fontSize: '15px',
                        color: '#303030',
                        '&:hover': {
                            border: '3px solid #303030',
                            backgroundColor: '#303030',
                            color: 'white',
                        }
                    }}
                >
                    {text}
                </Button>
            </Link>
        );
    } else {
        return (
            <Button
                onClick={click}
                variant='outlined'
                className='w-fit z-10'
                sx={{
                    borderRadius: '50px',
                    border: '3px solid #303030',
                    mt: 1,
                    px: 2,
                    py: '6px',
                    fontSize: '15px',
                    color: '#303030',
                    '&:hover': {
                        border: '3px solid #303030',
                        backgroundColor: '#303030',
                        color: 'white',
                    }
                }}
            >
                {text}
            </Button>
        );
    }
};