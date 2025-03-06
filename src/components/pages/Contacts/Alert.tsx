import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TSetBool } from '@/globalTypes';

export default function AlertDialog({ open, setOpen }: { open: boolean, setOpen: TSetBool }) {
    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        if (open) {
            const timer = setTimeout(() => setOpen(false), 5000);
            return () => clearTimeout(timer)
        }
    }, [open, setOpen]);

    return (
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                PaperProps={{
                    style: {
                        borderRadius: 10,
                        padding: 10
                    }
                }}
            >
                <DialogTitle textAlign='center'>Вы успешно оставили заявку</DialogTitle>
                <DialogContent>
                    <DialogContentText color='InfoText' textAlign='center'>
                        Мы перезвоним Вам в ближайшее время. Спасибо за обращение!
                    </DialogContentText>
                </DialogContent>
                <Button sx={{ mb: 2, mx: 'auto', width: 'fit-content' }} color='secondary' onClick={handleClose}>Закрыть окно</Button>
            </Dialog>
    );
}