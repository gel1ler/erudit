import { Button, Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { PhoneCall } from '@/components/icons/socialMediaIcons'
import MyDrawer from '../drawer/MyDrawer'
import Link from 'next/link'
import NavLinks from './NavLinks'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Bar = ({ isActive }: { isActive?: boolean }) => {
  return (
    <Toolbar
      sx={{
        height: '5rem',
        opacity: isActive ? 1 : 0,
        transition: 'opacity .15s ease-out',

      }}
    >
      <Box className='flex gap-10 w-full justify-between items-center'>
        <Link href='/' className='w-[163px]'>
          <Image
            alt='Logo'
            src='/logo/logo-horizontal.svg'
            width={163}
            height={56}
          />
        </Link>
        <NavLinks hoverType='color' />
        <AnchorLink href='#contacts_anchor'>
          <Button
            sx={{
              borderRadius: 100,
              py: [1, 1.5],
              px: [2, 3],
              color: 'white',
              background: 'linear-gradient(to right, #CE02CF, #0ED0F8)',
              transition: 'background .3s ease-out',
            }}
          >
            Контакты
          </Button>
        </AnchorLink>
      </Box>
    </Toolbar >
  )
}

export default Bar