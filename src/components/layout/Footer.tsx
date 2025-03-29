import React, { ReactNode } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
// import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from './icons'
import Link from 'next/link'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import { groupsData } from '@/content/content'

const Text = ({ href, children }: { href: string, children: ReactNode }) =>
    <Link href={href}>
        <Typography sx={{ transition: 'all .15s ease-out', ':hover': { color: '#0060b3' } }}>
            {children}
        </Typography>
    </Link>

const Footer = () => {
    return (
        <Box
            className='column-centered border-t'
            sx={{
                justifyContent: 'space-between',
                gap: 1,
                py: 4,
                width: '100%'
            }}
        >
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
                    mb: 4,
                    gap: 5,
                    mx: 'auto',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: '250px', mx: 'auto' }}>
                    <Image
                        src='/logo/logo-horizontal-base.svg'
                        width={250}
                        height={56}
                        alt='logo'
                    />
                    <Typography color='text'>
                        Основан в 2001 году
                    </Typography>
                    <Box sx={{ mx: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,

                            }}
                        >
                            <VkIcon dark />
                            <TelegramIcon dark />
                            <InstagramIcon dark />
                        </Box>
                        <PhoneCall />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', }}>
                    <Typography variant='h5' fontWeight='bold'>
                        Информация
                    </Typography>
                    <Text href='/agreement'>Пользовательское соглашение</Text>
                    <Text href='/privacy'>Персональные данные</Text>
                </Box>
                <Box sx={{ display: ['none', 'none', 'flex'], flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant='h5' fontWeight='bold'>
                        Группы
                    </Typography>
                    <Text href='/groups/0'>{groupsData[1].title}</Text>
                    <Text href='/groups/1'>{groupsData[3].title}</Text>
                    <Text href='/groups/2'>{groupsData[5].title}</Text>
                </Box>
            </Container >
            <Typography variant='body2' textAlign='center' sx={{ px: 1, }}>
                ©Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: www.small-erudite.ru
            </Typography>
        </Box >
    )
}

export default Footer