import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { EnrollButton, MoreBtn } from '@/components/UI/form/Buttons';

const ActivityCard = ({ activity, last }: { activity: { title: string, description: string, href: string, img?: string }, last?: boolean }) => {
  const { href, title, description, img } = activity
  return (
    <Box
      className={`relative group mb-2 transition-all overflow-hidden`}
    >
      <Box
        className={`
        h-full w-full rounded-2xl md:rounded-3xl px-10 py-10 relative
        flex flex-col items-center text-center justify-center
        border border-gray-300 gap-2 overflow-hidden
        bg-gradient-to-br from-[#31d6f7] to-[#fc32fc]
    `}
      >
        <Image src={img!} alt='Icon' className='absolute -bottom-10 -left-10 opacity-20' width={250} height={250} />
        <Typography variant="h4" className="text-white z-10" sx={{ width: 'fit-content' }} fontWeight='bold' textAlign='center'>
          {title}
        </Typography>
        <Typography className="text-white px-1 md:px-8" variant='h6' textAlign='center'>
          {description}
        </Typography>
        <MoreBtn href={href} />
      </Box>
    </Box>
  );
};

export default ActivityCard;