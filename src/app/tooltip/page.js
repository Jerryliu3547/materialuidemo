import React from 'react'
import { Tooltip, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const page = () => {
  return (
    <div className='bg-slate-200 p-10'>
        <Typography variant='h5' color='primary' gutterBottom>the following shows the tooltip, which show tips when hover over the button</Typography>
        <Tooltip title="Delete" placement='right' arrow>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default page