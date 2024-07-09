import { SxProps, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const Title = ({ children, sx, left }: { children: ReactNode, sx?: SxProps, left?: boolean }) => {
  return (
    <Typography variant='h2' textAlign={!left ? 'center' : 'start'} fontWeight={600} data-aos='fade-up' sx={sx}>
      {children}
    </Typography>
  )
}

export default Title