import { Button, Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { PhoneCall } from '@/components/icons/socialMediaIcons'
import MyDrawer from '../drawer/MyDrawer'
import Link from 'next/link'
import NavLinks from './NavLinks'
const Bar = ({ }) => {

  return (
    <Toolbar sx={{ height: '5rem' }}>
      <Box className='flex gap-20 w-full justify-between items-center'>
        <Link href='/' className=''>
          <Image
            alt='Logo'
            src='/logo/logo-horizontal.svg'
            width={163}
            height={56}
          />
        </Link>
        <NavLinks hoverType='color' />
        <Button
          sx={{
            borderRadius: 100,
            py: 1.5,
            px: 3,
            color: 'white',
            background: 'linear-gradient(to right, #CE02CF, #0ED0F8)',
            transition: 'background .3s ease-out',
          }}
        >
          Контакты
        </Button>
      </Box>
    </Toolbar >
  )
}

export default Bar