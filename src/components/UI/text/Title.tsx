import { SxProps, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const Title = ({ children, sx }: { children: ReactNode, sx?: SxProps }) => {
  return (
    <Typography variant='h2' textAlign='center' fontWeight={600} color='secondary' data-aos='fade-up' sx={sx}>
      {children}
    </Typography>
  )
}

export default Title