import React from 'react'
import {Stack, Avatar, AvatarGroup, Typography} from '@mui/material'

const page = () => {
  return (
    <div className='p-4 mx-auto'>
        <Typography variant='h5'>This Section shows the avatar function, import library Avatar and AvatarGroup</Typography>
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
            </Stack>     
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/men/79.jpg' alt='John Dow' />
                <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='John Dow' />
            </Stack>     
            <Typography variant='h6' component='div' gutterBottom>Avatar Group</Typography>
            <Stack direction='row' spacing={1}>
                <AvatarGroup max={4}>
                    <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                    <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/men/88.jpg' alt='John Dow' />
                    <Avatar src='https://randomuser.me/api/portraits/women/88.jpg' alt='John Dow' />
                    <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                    <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
                </AvatarGroup>
            </Stack>  
            <Typography variant='h6' gutterBottom>The following shows variant prop as rounded, and specify width and height in sx prop</Typography>
            <Stack direction='row' spacing={1}>
                <Avatar variant='rounded' sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.light', width:48, height:48}}>CK</Avatar>
            </Stack>     
        </Stack>
    </div>
  )
}

export default page