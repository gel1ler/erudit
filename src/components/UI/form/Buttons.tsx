import { Button, ButtonGroupPropsVariantOverrides, ButtonPropsVariantOverrides } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const EnrollButton = ({ dark }: { dark?: boolean }) => {
    return (
        <Link href='#contacts_anchor'>
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
                Пробное посещение
            </Button>
        </Link >
    )
}

export const ContactsButton = ({ drawer, onClick, text }: { drawer?: boolean, onClick?: () => void, text?: boolean }) =>
    <Link href='#contacts_anchor'>
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
    </Link>


const MyButton = ({ aos, text, click, dark, variant }: { aos?: boolean, text?: string, click?: () => void, dark?: boolean, variant?: "text" | "outlined" | "contained" }) =>
    <Button
        variant={variant ? variant : 'outlined'}
        className='w-fit z-10'
        onClick={click}
        data-aos={aos ? 'fade-up' : ''}
        sx={{
            borderRadius: '50px',
            mt: 1,
            px: 2,
            py: '6px',
            fontSize: '15px',
            bgcolor: variant === 'contained' ? '#303030' : 'transparent',
            border: variant === 'outlined' ? `3px solid ${dark ? '#303030' : '#fff'}` : '',
            color: dark ? variant === 'contained' ? '#fff' : '#303030' : '#fff',
            '&:hover': variant === 'outlined' ? {
                border: '3px solid transparent',
                backgroundColor: dark ? '#303030' : '#fff',
                color: dark ? '#fff' : '#303030',
            } : {
                backgroundColor: 'rgba(0,0,0,.5)',
                // color: variant === 'contained' ? '#303030' : ''
            }
        }}
    >
        {text}
    </Button>

export function MoreBtn({
    click, href, text, aos, dark, variant
}: {
    click?: () => void; href?: string; text?: string; aos?: boolean; dark?: boolean; variant?: "text" | "outlined" | "contained"
}) {
    text = text || 'подробнее'

    if (href) {
        return (
            <Link href={href}>
                <MyButton aos={aos} text={text} dark={dark} variant={variant || 'outlined'} />
            </Link>
        )
    } else {
        return (
            <MyButton aos={aos} text={text} click={click} dark={dark} variant={variant || 'outlined'} />
        )
    }
}