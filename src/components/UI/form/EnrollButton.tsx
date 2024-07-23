import { Button } from '@mui/material'
import React from 'react'

const EnrollButton = () => {
    return (
        <Button
            variant='outlined'
            className='w-fit'
            sx={{
                borderRadius: '50px',
                py: '10px',
                border: '3px solid #fff',
                px: 4,
                fontSize: '15px',
                '&:hover': {
                    border: '3px solid #fff',
                    backgroundColor: '#fff',
                    color: 'text.primary',
                }
            }}
        >
            Записаться
        </Button>
    )
}

export default EnrollButton