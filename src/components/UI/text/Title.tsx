import { SxProps, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const Title = ({
  children, sx, left, noAos, white, gradient, h1
}: {
  children: ReactNode, sx?: SxProps, left?: boolean, noAos?: boolean, white?: boolean, gradient?: boolean, h1?: boolean
}) => {
  const sx1: SxProps = { textAlign: ['center', 'center', 'center', !left ? 'center' : 'start'] };
  const combinedSx = {
    ...sx1,
    ...sx
  };

  return (
    <Typography
      variant={h1 ? 'h1' : 'h2'}
      sx={combinedSx}
      fontWeight={600}
      data-aos={noAos ? '' : 'fade-up'}
      color={white ? 'white' : 'text'}
      className={gradient ? 'gradient-text w-fit mx-auto' : ''}
    >
      {children}
    </Typography >
  )
}

export default Title