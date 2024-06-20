import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Typography variant='h2' textAlign='center' fontWeight={600} color='secondary' data-aos='fade-up'>
      {children}
    </Typography>
  )
}

export default Title