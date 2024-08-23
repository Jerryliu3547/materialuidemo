'use client'
import React from 'react'
import {Stack, Chip, Typography, Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import {useState} from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const page = () => {
  const [chips, setChips] = useState(['chips1', 'chips2', 'chips3'])  
  const handleDelete = (chipToDelete) =>{
    setChips(chips => chips.filter(item =>item!==chipToDelete))
  }
  return (
    <div className='bg-slate-100 p-5'>
        <Stack direction='row' spacing={1}>
            <Chip label='chip 1' color='primary' />
            <Chip label='chip 2' color='secondary' />
            <Chip label='chip 3' />
            <Chip label='with Avatars' color='success'  avatar={<Avatar>DL</Avatar>}/>
            <Chip label='with Icon' color= 'secondary' icon={<FaceIcon/>}/>
    
        </Stack>
        <Typography variant='h6' gutterBottom className='text-black'>On delete Case</Typography>
        <Stack direction='row' spacing={1}>
            {chips.map((chip, index)=>{
                return (
                    <Chip key={index} label={chip} color='primary' onDelete={()=> handleDelete(chip)} icon={<DeleteForeverIcon/> }/>
                )
            })}


        </Stack>
    </div>
  )
}

export default page