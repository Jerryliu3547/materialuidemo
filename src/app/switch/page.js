'use client'
import React from 'react'
import {Box, FormControlLabel, Switch} from '@mui/material'
import {useState} from 'react'

const switchPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleToggle = (e) => {
    setDarkMode(e.target.checked)
  }
  return (
    <div> switchPage
        <Box className='bg-slate-400'>
            <FormControlLabel label='Dark mode' control={<Switch color='secondary' checked={darkMode} onChange={handleToggle}/>}/>
        </Box>
        <p>the dark mode is: {darkMode? 'On' : "Off"}</p>
    </div>
  )
}

export default switchPage