import { SxProps, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const Title = ({ children, sx, left }: { children: ReactNode, sx?: SxProps, left?: boolean }) => {
  const sx1: SxProps = { textAlign: ['center', 'center', 'center', !left ? 'center' : 'start'] };
  const combinedSx = {
    ...sx1,
    ...sx
  };

  return (
    <Typography variant='h2' sx={combinedSx} fontWeight={600} data-aos='fade-up' >
      {children}
    </Typography >
  )
}

export default Title