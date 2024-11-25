import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const ActivityCard = ({ activity, last }: { activity: { title: string, description: string, href: string, img?: string }, last?: boolean }) => {
  const { href, title, description, img } = activity
  return (
    <Link
      href={href}
      className={`relative group mb-2 md:-mt-12 transition-all ${last ? '' : 'md:hover:mb-14 hover:mb-5'} duration-300 overflow-hidden`}

    >
      <Box
        className={`
        h-full w-full rounded-2xl md:rounded-full cursor-pointer
        ${last ? 'md:pb-16' : 'md:pb-24'} md:hover:pb-20 md:pt-16 md:hover:pt-20
        px-4 md:pl-16 md:pr-10 py-10 relative
        flex flex-col md:flex-row items-center justify-between text-center
        duration-[.4s] transition-all border border-gray-300 gap-1 overflow-hidden
        bg-gradient-to-br from-[#31d6f7] to-[#fc32fc]
    `}
      >
        {/* <Image
          alt='bg'
          fill
          src={img!}
          className='rounded-2xl md:rounded-full object-cover scale-x-[1.02]'
        /> */}
        <Box className='flex items-center gap-4'>
          <Image src={img!} alt='Icon' width={60} height={60} />
          <Typography variant="h4" className="text-white z-10" fontWeight='semibold' sx={{ textAlign: ['center', 'center', 'left'] }}>
            {title}
          </Typography>
        </Box>
        <Box className='z-10 flex items-center md:w-2/3 lg:w-2/5 gap-2'>
          <Typography className="text-white" variant='h6' sx={{ textAlign: ['center', 'center', 'right'] }}>
            {description}
          </Typography>
          <Image className='hidden md:block' src='/icons/Back.svg' alt='arrow' width={50} height={50} />
        </Box>
      </Box>
    </Link>
  );
};

export default ActivityCard;