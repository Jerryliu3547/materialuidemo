'use client'
import { Typography, Button, Stack, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
const page = () => {
  return (
   
    <div>
        <Typography variant='h3'component='h1' gutterBottom>This is the button Demo for Material UI</Typography>
        <Stack spacing={2} direction='row'>
            {/* use in cancel or back */}
            <Button variant="outlined">Outlined</Button>
            {/* grab less user attention use such as footer*/}
            <Button variant='text'>Text</Button>
            {/* grab more attention use in such as login*/}
            <Button variant="contained">Contained</Button>
        </Stack>
        <Typography variant='h4' component='h1' gutterBottom>Button Link</Typography>
        <Button component="a" href="https://www.google.com" variant='contained' color='info' target='_blank' className='mb-3'>Link to Google</Button>
        <Typography variant='h4' component='h1' gutterBottom>Button Theme and Color</Typography>

        <Stack spacing={2} direction='row'>
            <Button variant="contained">Primary</Button>
            <Button variant="contained" color='error'>Error</Button>
            <Button variant="contained" color='success'>Success</Button>
            <Button variant="contained" color='warning'>Warning</Button>
            <Button variant="contained" color='info'>Info</Button>
        </Stack>
        <br/>
        <Typography variant='h4' component='h1' gutterBottom>Button Size</Typography>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant="contained" size='small'>Small</Button>
            <Button variant="contained" size='medium'>Medium</Button>
            <Button variant="contained" size='large'>Large</Button>

        </Stack>

        <Typography variant='h4' component='h1' gutterBottom>Button with Icon</Typography>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant='contained' size='medium' startIcon={<SendIcon/>}>Send</Button>
            <Button variant='contained' size='medium' endIcon={<SendIcon/>} >Send</Button>
            <IconButton color='success' size='large'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Typography variant='h4' component='h1' gutterBottom>Button Disabled Customize effect</Typography>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant='contained' size='medium' startIcon={<SendIcon/>} disableElevation disableRipple>Send</Button>
            <Button variant='contained' size='medium' endIcon={<SendIcon/>} >Send</Button>
            <Button variant='contained' size='medium'  startIcon={<CrisisAlertIcon/>} onClick={() => alert('Alert')}>Alert</Button>
        </Stack>

        <Typography variant='h4' component='h1' gutterBottom>Button Group</Typography>
        <Stack spacing={2} direction='row' display='flex'>
            <ButtonGroup variant="contained">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack spacing={3} direction='row' display='flex'>
            <ButtonGroup variant="text" size='large' color='secondary' aria-label='alignment button group'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

    </div>
  )
}

export default page
