'use client'
import React from 'react'
import Link from 'next/link'
import { Stack, Autocomplete, TextField } from '@mui/material'

const autocompletePage = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js']
  const skillsOption = skills.map((skill, index) =>({
        id : index,
        skill : skill
  }))

  return (
    <div> 
        <h1>autocompletePage</h1>
        <Link href='https://mui.com/material-ui/react-autocomplete/' target='_blank'>Link to AutoComplete Documents</Link>

        <Stack spacing={2} width='250px' className='bg-slate-400 p-5'>
            <Autocomplete 
                
                options={skills} 
                renderInput={(params) => <TextField {...params} label="Skills" />}
                //freeSolo can add additional input to field where not in the skills list
                freeSolo
            />
        </Stack>

    </div>
  )
}

export default autocompletePage