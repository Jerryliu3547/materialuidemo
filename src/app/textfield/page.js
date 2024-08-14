'use client'
import {Stack, TextField, InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import {useState} from 'react'


const textField = () => {
  const [value, setValue] = useState('')

  return (
    <Stack spacing={4} className='bg-white py-9 px-9'>
        <Stack direction='row' spacing={2}>
            <TextField label='Outlined' variant='outlined' placeholder='example'/>
            <TextField label='Filled' variant='filled' placeholder='example'/>
            <TextField label='Standard' variant='standard' placeholder='example'/>
        </Stack>


        <h1 className='text-black'>Different props, such as size, color, variant</h1>
        <Stack direction='row' spacing={2}>
            <TextField label="Small Secondary" variant='outlined' size='small' color='secondary' placeholder='example'/>    
        </Stack>

        <h1 className='text-black'>more prop such as required, helperText, type</h1>
        <Stack direction='row' spacing={2}>
            <TextField label="Required" variant='outlined' size='small' color='success' placeholder='example' required/>    

            <TextField label="helperText" variant='outlined' size='small' color='warning' placeholder='example' helperText='this field is the helper text'/>    

            <TextField label="Type: Password" variant='outlined' size='small' color='primary' placeholder='example' helperText='more than 8 letters the word typed in will be hidden' type='password'/>    
        </Stack>

        <h1 className='text-black'>InputAdornment</h1>
        <Stack direction='row' spacing={2}>
            <TextField label="with prefix" variant='outlined' size='small' color='primary' placeholder='example' InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>  

            <TextField label='Weight'  variant='outlined' size = 'small' color='info' placeholder='example: 90 lbs'InputProps={{startAdornment: <InputAdornment position='start'>lbs</InputAdornment>}} />

            <TextField label="with suffix" variant='outlined' size='small' color='primary' placeholder='example' InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>}}/>    

            <TextField label="with icon" variant='outlined' size='small' color='primary' placeholder='example' InputProps={{startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>}}/>    
        </Stack>

        <h1 className='text-black'>Conditional Text Prop of Error Attribute</h1>
        <TextField value={value} onChange={e=>{
            setValue(e.target.value)
        }} label='Zip Code' variant='outlined' size='large' placeholder='please enter a zip code' helperText='Zip Code must be 5 digits long' color='success' InputProps={{
            startAdornment: <InputAdornment position='start'><MapIcon/></InputAdornment> } 
        } error={ (value.length !==5 ? true : false)}/>
    </Stack>
  )
}

export default textField