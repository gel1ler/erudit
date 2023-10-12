import { headerProps } from '@/customization/customization'
import { Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import { MenuIcon } from '@/components/icons/UI'
import MyDrawer from '../UI/MyDrawer'
import TopHeader from './topHeader/TopHeader'
import Link from 'next/link'

const Bar = ({ noBg }: { noBg?: boolean }) => {
  const isFullwidth: string = headerProps.fullwidth ? '' : ' max-w-7xl mx-auto'

  return (
    <>
      {headerProps.topHeader ? <TopHeader noBg={noBg} /> : null}
      <Toolbar className={'flex w-full' + isFullwidth} sx={{ justifyContent: ['center', 'space-between'], my: 'auto' }}>
        <Link href='/'>
          <Image
            alt='Logo'
            src='/logo/logo-gorizontal.svg'
            width={200}
            height={40}
          />
        </Link>
        <Box className='flex gap-6'>
          <Box className='gap-3 items-center' sx={{ display: ['none', 'flex'] }}>
            <VkIcon />
            <TelegramIcon />
            <PhoneCall icon />
          </Box>
          <MyDrawer />
        </Box>
      </Toolbar>
    </>
  )
}

export default Bar