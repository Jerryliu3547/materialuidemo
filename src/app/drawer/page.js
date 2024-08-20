'use client'
import React from 'react'
import {Box, Drawer, Divider, List, ListItem, ListItemText, Typography, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'


const Drawerpage = () => {
  const [isOpen, setIsOpen] = useState(false)  
  return (
    <div className='bg-white'>
        <IconButton size='large' onClick={()=>{setIsOpen(true)}} >
            <MenuIcon />
        </IconButton>
        <Drawer anchor='left' open={isOpen} onClose={()=>{setIsOpen(false)}}>
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
    </div>
  )
}

export default Drawerpage