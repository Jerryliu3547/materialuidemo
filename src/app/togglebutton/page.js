'use client'
import React from 'react'
import { Typography, ToggleButton, ToggleButtonGroup, Stack } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react'

const page = () => {
  const [format, setFormat] = useState([]) 
  const handleToggle = (event, newValue) => {

    setFormat(newValue);
    console.log(format)

  };
 
  return (
    <div className='bg-white'>
        <Typography variant='h3' component='h1' gutterBottom className='text-black'>Toggle Button</Typography>
        <Typography variant='h4' component='h1' gutterBottom className='text-black'>

                add exclusive to toggleButtonGroup will make only 1 style apply
        </Typography>
        <Stack direction='row'>
            <ToggleButtonGroup value={format} color='error' size='large' orientation='vertical' onChange={handleToggle}>
                <ToggleButton value="bold" aria-label="Bold" >
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="Italic" >
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underline" aria-label="Underline">
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>

        </Stack>
    </div>
  )
}

export default page