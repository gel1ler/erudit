import { Box } from '@mui/material'
import React from 'react'

const Fill = () => {
    return (
        <Box
            className='w-full h-full absolute left-0 top-0 -z-40'
            sx={{
                background: `linear-gradient(to bottom, transparent 90%, white)`,
            }}
        />
    )
}

export default Fill