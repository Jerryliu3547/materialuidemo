'use client'
import React from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, Checkbox, FormGroup} from '@mui/material'
import {useState} from 'react'
import Link from 'next/link'



const checkBoxPage = () => {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [skills, setSkills] = useState([])
  const handleSkills = (e) =>{
    const index = skills.indexOf(e.target.value)
    if (index === -1){
        setSkills([...skills, e.target.value])
    } else {
        setSkills(skills.filter((skill) => skill!== e.target.value))
    }

  }
  console.log(acceptTnC)
  const handleChange = (e) => {
    setAcceptTnC(e.target.checked)
  }  
  return (
    <div> 
        <Link href='https://mui.com/material-ui/react-checkbox/' target='_blank'>Link to CheckBox Material UI documents</Link>
        <br />
        <h1>checkBoxPage</h1>
        <Box className='bg-slate-400 '>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}/>
        </Box>
        <p className='bg-slate-700'>the status of check term and conditions {acceptTnC ? 'Yes' : 'No'}</p>

        <br/>

        <h1>this following shows multiple checkbox</h1>
        <Box className='bg-slate-400 p-5'>
            <FormControl>
                <FormLabel component='legend'>Select all Your Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label='CSS' value='CSS' control={<Checkbox size='large' color='secondary' checked={skills.includes('CSS')} onChange={handleSkills} />} />
                    <FormControlLabel label='HTML' value='HTML' control={<Checkbox checked={skills.includes('HTML')} onChange={handleSkills} />} />
                    <FormControlLabel label='JAVASCRIPT' value='JAVASCRIPT' control={<Checkbox checked={skills.includes('JAVASCRIPT')} onChange={handleSkills} />} />
                </FormGroup>
            </FormControl>
        </Box>
        <p className='bg-slate-700'>The selected skills: {skills.join(', ')}</p>

    </div>
  )
}

export default checkBoxPage