import { TSetBool } from "@/globalTypes"
import IB from "./IB"
import { Instagram, WhatsApp, Telegram, Phone, Menu } from '@mui/icons-material'

const style = { fontSize: 30 }

export const MenuIcon = ({ setOpen }: { setOpen: () => void }) => { return (<IB f={setOpen}><Menu sx={style} /></IB>) }