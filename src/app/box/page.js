import React from 'react'
import {Box} from '@mui/material'

const boxPage = () => {
  return (
    <Box component='div' sx={{
        backgroundColor: 'slate',
        borderRadius: 5,
        padding: 10,
        width: 300,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover':{
            backgroundColor:'slate.600',
            transition: 'background-color 0.3s ease-in-out'
        }
  
    }}>
        Box Page
    </Box>
  )
}

export default boxPage