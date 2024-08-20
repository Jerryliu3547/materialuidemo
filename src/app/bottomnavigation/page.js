'use client'
import React from 'react'
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {useState} from 'react'

const BottomNavPage = () => {
    const [value, setValue] = useState(0);

  
  return (
    <div>
        <Typography variant='h4' gutterBottom component='h1'>This is a bottom navigation bar</Typography>
        <Typography variant='h4' gutterBottom component='div'>
            need to import BottomNavigation and set state, import BottomNavigationAction
        </Typography>
        <BottomNavigation value={value} onChange={(event, newValue)=>{
            setValue(newValue)
        }} showLabels sx={{width:'100%', position: 'absolute', bottom: 0}}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="About" icon={<InfoIcon />} />
            <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} />

        </BottomNavigation>
    </div>
  )
}
export default BottomNavPage