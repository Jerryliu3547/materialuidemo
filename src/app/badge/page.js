import React from 'react'
import {Stack, Typography, Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const page = () => {
  const mail = 0
  return (
    <div className='p-5'>
        <Typography variant='h4'>This Section shows the badge function, import library Badge</Typography>
        <Stack spacing={2} direction="row">
            <Badge badgeContent={4} color="secondary">
                <Typography variant="h5">Badge</Typography>
            </Badge>
            <Badge badgeContent={3} color="primary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={100} color="primary">
                <MailIcon />
            </Badge>
            <Badge variant='dot' color="primary">
                <MailIcon />
            </Badge>
            <Typography variant='h6'>show invisible prop and set invisible to 0 when mail length is zero</Typography>
            <Badge variant='dot' color="primary" invisible={mail === 0}>
                <MailIcon />
            </Badge>


        </Stack>
    </div>
  )
}

export default page