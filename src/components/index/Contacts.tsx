import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import Title from '../UI/text/Title'

const Contacts = () => {
    return (
        <Box className='bg-slate-100 w-screen p-20'>
            <Title>Присоединяйтесь к нам</Title>
            <Box data-aos='fade-up' className='flex flex-col max-w-lg mx-auto mt-10'>
                <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth placeholder='Имя'>

                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth placeholder='Email'>

                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth placeholder='Сообщение' multiline minRows={2}>

                        </TextField>
                    </Grid>
                </Grid>
                <Button
                    sx={{
                        background: '#F7631E',
                        borderRadius: 60,
                        width: 'fit-content',
                        mx: 'auto',
                        px: 3,
                        py: 1,
                        mt: 1,
                        ":hover": {
                            background: '#f34723',
                        }
                    }}
                >
                    Оставить заявку
                </Button>
            </Box>
        </Box>
    )
}

export default Contacts