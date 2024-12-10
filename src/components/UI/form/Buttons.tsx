import { Button, ButtonPropsVariantOverrides } from '@mui/material'
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


const MyButton = ({ aos, text, click, dark }: { aos?: boolean, text?: string, click?: () => void, dark?: boolean }) =>
    <Button
        variant='outlined'
        className='w-fit z-10'
        onClick={click}
        data-aos={aos ? 'fade-up' : ''}
        sx={{
            borderRadius: '50px',
            mt: 1,
            px: 2,
            py: '6px',
            fontSize: '15px',
            border: `3px solid ${dark ? '#303030' : '#fff'}`,
            color: dark ? '#303030' : '#fff',
            '&:hover': {
                border: '3px solid transparent',
                backgroundColor: dark ? '#303030' : '#fff',
                color: dark ? '#fff' : '#303030',
            }
        }}
    >
        {text}
    </Button>

export function MoreBtn({
    click, href, text, aos, dark, variant
}: {
    click?: () => void; href?: string; text?: string; aos?: boolean; dark?: boolean; variant?: ButtonPropsVariantOverrides
}) {
    text = text || 'подробнее'

    if (href) {
        return (
            <Link href={href}>
                <MyButton aos={aos} text={text} dark={dark} />
            </Link>
        )
    } else {
        return (
            <MyButton aos={aos} text={text} click={click} dark={dark} />
        )
    }
}