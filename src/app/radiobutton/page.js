'use client'
import React from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material'
import {useState} from "react"
const radioButtonPage = () => {
  const [gender, setGender] = useState('')
  console.log(gender)

  const handleChange = (e) => {
    setGender(e.target.value)
  }
  return (
    <div >
        radioButtonPage
        <Box className= "bg-slate-500">
            <FormControl component="fieldset" color='secondary' value={gender} 
            onChange={handleChange}>
                <FormLabel component="legend">Please Select Your Gender</FormLabel>

                {/* you can select column or row for display */}

                <RadioGroup name='job-experience-group' column defaultValue="female">
                    <FormControlLabel value="female" control={<Radio color='secondary' size='large'/>} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <FormHelperText>You selected {gender}</FormHelperText>
        </Box>
    
    </div>
  )
}

export default radioButtonPage