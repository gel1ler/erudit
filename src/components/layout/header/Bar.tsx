import { headerProps } from '@/customization/customization'
import { Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { InstagramIcon, PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import { MenuIcon } from '@/components/icons/UI'
import MyDrawer from '../UI/MyDrawer'
import TopHeader from './topHeader/TopHeader'

const Bar = () => {
  const isFullwidth: string = headerProps.fullwidth ? '' : ' max-w-6xl mx-auto'

  return (
    <>
      <TopHeader />
      <Toolbar className={'flex w-full' + isFullwidth} sx={{ justifyContent: ['center', 'space-between'] }}>
        <Image
          alt='Logo'
          src='/logo/logo-gorizontal.svg'
          width={200}
          height={80}
        />
        {/* <Box className='gap-3 items-center' sx={{ display: ['none', 'flex'] }}> */}
        <Box className='flex gap-6'>
          <Box className='flex gap-3 items-center'>
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