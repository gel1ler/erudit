'use client'
import React, { useState} from 'react'
import { Box, Typography, AppBar, Toolbar } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const Header = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    return (

        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header