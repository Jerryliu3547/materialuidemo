'use client'
import {Box, TextField, MenuItem, Typography} from '@mui/material'
import {useState} from 'react'

import React from 'react'

const MuiSelect = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  console.log(country)  
  console.log(countries) 
  const handleChange = (e) =>{
    setCountry(e.target.value) 
  }  
  const handleMultipleChange = (e) =>{

    setCountries(e.target.value)
  }
  return (
    //single select option
    <>
        <Typography variant='h4' gutterBottom component='h1'>The following is single select field(by set textField to select to make it select field)</Typography>

        <Box width='250px' className='bg-white p-3'>
        <TextField
        //select prop make the text field a select field
            select
            label="Select Country"
            value={country}
            onChange={handleChange}
            fullWidth={true}
        >
            <MenuItem value="US">USD</MenuItem>
            <MenuItem value="CN">CHINA</MenuItem>
            <MenuItem value="JA">Japan</MenuItem>
        </TextField>
        </Box>

        <br/>

        <Typography variant='h4' gutterBottom component='h1'>The following is multiple select field(by set SelectProps multiple to true)</Typography>

        <Box width='250px' className='bg-white p-3'>
        <TextField
        //select prop make the text field a select field
            select
            label="Select Country"
            value={countries}
            onChange={handleMultipleChange}
            fullWidth={true}
            SelectProps={{
                multiple: true, //allow multiple selection
            }}
            helperText="Select Countries You want to Visit"
        >
            <MenuItem value="US">USD</MenuItem>
            <MenuItem value="CN">CHINA</MenuItem>
            <MenuItem value="JA">Japan</MenuItem>
        </TextField>
        </Box>

    </>
  )
}

export default MuiSelect