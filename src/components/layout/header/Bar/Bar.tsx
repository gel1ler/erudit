import { Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import Link from 'next/link'
import NavLinks, { Text } from './NavLinks'
import MyDrawer from '../drawer/MyDrawer'
import { ContactsButton } from '@/components/UI/form/Buttons'
import { ECenter } from '@/content/content'

const ECenterBlock = () =>
  <Box className='relative hidden md:block'>
    <Link href='/#ECenter_anchor' className="peer flex flex-col items-center">
      <Typography className='gradient-text' fontSize={17} fontWeight='bold' textAlign='center'>
        Эрудит центр
      </Typography>
      <Typography variant='body2' fontSize={11} mt='-4px' textAlign='center'>
        Школьники и взрослые
      </Typography>
    </Link>
    <Box className={`
      absolute top-1/2 -left-1/2 mt-2 transition-all duration-300 z-20 w-max opacity-0 pointer-events-none 
      peer-hover:opacity-100 peer-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto
    `}>
      <Box className="bg-white shadowed rounded-lg p-4 mt-4">
        {ECenter.map((link, index) => (
          <Link key={index} href={link.href} className='block py-2'>
            <Text>
              {link.title}
            </Text>
          </Link>
        ))}
      </Box>
    </Box>
  </Box>




const Bar = ({ isActive }: { isActive?: boolean }) => {
  return (
    <Toolbar
      sx={{
        height: '5rem',
        opacity: isActive ? 1 : 0,
        transition: 'opacity .3s ease-out',
        // overflow: 'hidden'
      }}
    >
      <Box className='flex w-full justify-between items-center'>
        <Link href='/' className='w-[163px]'>
          <Image
            alt='Logo'
            src='/logo/new-logo-horizontal.svg'
            width={163}
            height={76}
            className='scale-110 -translate-y-1'
          />
        </Link>
        <NavLinks />
        <Box className='flex items-center gap-4'>
          <ECenterBlock />
          <ContactsButton />
          <MyDrawer noAbs isActive={isActive} />
        </Box>
      </Box>
    </Toolbar >
  )
}

export default Bar