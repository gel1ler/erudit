'use client'
import { Button } from '@mui/material'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const EnrollButton = () => {
    return (
        <AnchorLink href='#contacts_anchor'>
            <Button
                variant='outlined'
                className='w-fit'
                sx={{
                    borderRadius: '50px',
                    py: '10px',
                    border: '3px solid #fff',
                    px: 4,
                    fontSize: '15px',
                    '&:hover': {
                        border: '3px solid #fff',
                        backgroundColor: '#fff',
                        color: 'text.primary',
                    }
                }}
            >
                Пробное занятие
            </Button>
        </AnchorLink>
    )
}

export const ContactsButton = ({ drawer, onClick }: { drawer?: boolean, onClick?: () => void }) =>
    <AnchorLink href='#contacts_anchor'>
        <Button
            onClick={onClick}
            sx={{
                borderRadius: 100,
                py: [1, 1.5],
                px: [2, 3],
                color: 'white',
                background: 'linear-gradient(to right, #CE02CF, #0ED0F8)',
                transition: 'background .3s ease-out',
                display: drawer ? "block" : ['none', 'block'],
            }}
        >
            Контакты
        </Button>
    </AnchorLink>