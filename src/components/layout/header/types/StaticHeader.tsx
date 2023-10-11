import React from 'react'
import { AppBar } from '@mui/material'
import Bar from '../Bar'
import TopHeader from '../topHeader/TopHeader'

const StaticHeader = () => {
    return (
            <AppBar className='p-2' position='static'>
                <Bar />
            </AppBar>
    )
}

export default StaticHeader