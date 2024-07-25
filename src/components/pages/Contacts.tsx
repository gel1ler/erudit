'use client'
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Title from '../UI/text/Title'
import MuiPhone from '../UI/form/PhoneNumber'

const Contacts = ({ noAos }: { noAos?: boolean }) => {
    const [phone, setPhone] = useState('')

    return (
        <Box id='contacts_anchor' className='bg-slate-100 w-screen py-20 px-2'>
            <Title noAos={noAos}>Присоединяйтесь к нам</Title>
            <Box data-aos={noAos ? '' : 'fade-up'} className='flex flex-col max-w-lg mx-auto mt-8'>
                <Grid container rowSpacing={1} columnSpacing={2} justifyContent='center'>
                    <Grid item xs={10}>
                        <MuiPhone value={phone} onChange={setPhone} />
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
                        mt: 2,
                        ":hover": {
                            background: '#f34723',
                        }
                    }}
                >
                    Оставить заявку
                </Button>
            </Box>
            <Box className='flex xl:flex-row flex-col w-fit mx-auto mt-20 gap-8'>
                <Box>
                    <Title left noAos={noAos}>Контакты</Title>
                    <Typography variant='body2' color='GrayText' className='text-center xl:text-left'>
                        Нажмите на данные ниже, чтобы взаимодействовать с ними
                    </Typography>
                    <ul data-aos={noAos ? '' : 'fade-up'} className='text-lg space-y-3 mt-2 w-fit'>
                        <li style={{ textAlign: 'center' }}>
                            <a target="_blank" href='https://yandex.ru/maps/org/malenkiy_erudit/1108324675/?utm_medium=mapframe&utm_source=maps'><b>Адрес:</b> Жуковский, улица Амет-Хан-Султана дом 7а, 2 этаж</a>
                        </li>
                        <li>
                            <a href='mailto:info@small-erudit.ru'><b>Email:</b> info@small-erudit.ru</a>
                        </li>
                        <li>
                            <a href='tel:+79167969809'><b>Телефон:</b> +7 (916) 796-98-09</a>
                        </li>
                    </ul>
                </Box>
                <Box data-aos={noAos ? '' : 'fade-up'} className='relative overflow-hidden rounded-xl shadow-xl md:min-w-[560px]'><a href="https://yandex.ru/maps/org/malenkiy_erudit/1108324675/?utm_medium=mapframe&utm_source=maps" className='text-[#eee] text-xs absolute top-0'>Маленький Эрудит</a><a href="https://yandex.ru/maps/20571/zhukovskiy/category/children_developmental_center/184107204/?utm_medium=mapframe&utm_source=maps" className='text-[#eee] text-xs absolute top-[14px]'>Центр развития ребёнка в Жуковском</a><iframe src="https://yandex.ru/map-widget/v1/?ll=38.163479%2C55.597342&mode=search&oid=1108324675&ol=biz&sll=38.163479%2C55.597328&source=serp_navig&text=%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B9%20%D1%8D%D1%80%D1%83%D0%B4%D0%B8%D1%82&z=13" width="100%" height="400" allowFullScreen={true} style={{ position: "relative" }}></iframe></Box>
            </Box>
        </Box>
    )
}

export default Contacts