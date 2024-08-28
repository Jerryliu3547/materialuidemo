"use client"
import React from 'react'
import { Alert, Stack, AlertTitle} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const AlertPage = () => {
  return (
    <div>
        AlertPage prop is  severity there are 4 different severity
        <Stack spacing={2}>
            <Alert severity="success" onClose={()=>{alert('close the alert')}}>
                This is a success alert
            </Alert>
            <Alert severity="warning">This is a warning alert</Alert>
            <Alert severity="error">This is an error alert</Alert>
            <Alert severity='info'>This is Info alert</Alert>

            <h1>add AlertTitle</h1>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert
            </Alert>

            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                This is a warning alert
            </Alert>

            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>

            <Alert severity='info'>
                <AlertTitle>Info</AlertTitle>
                This is Info alert
            </Alert>

            <h1>change variant prop to outlined and filled</h1>
            <Alert variant='outlined' severity="success">This is a success alert</Alert>
            <Alert variant='outlined' severity="warning">This is a warning alert</Alert>
            <Alert variant='outlined' severity="error">This is an error alert</Alert>
            <Alert variant='filled' severity='info'>This is Info alert</Alert>

            <h1>change icon by alter icon prop</h1>
            <Alert variant='filled' severity='info' icon={<CheckIcon fontSize='inherit'/>} >This is Info alert</Alert>
        </Stack>
    </div>
  )
}

export default AlertPage