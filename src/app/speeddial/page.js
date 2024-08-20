import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import SaveIcon from "@mui/icons-material/Save"
import EditIcon from "@mui/icons-material/Edit"
const SpeedDialPage = () => {
  return (
    <div className='bg-white min-h-[100vh]'>
        <Typography variant='h4' component='h1' gutterBottom color='primary'>
            This page show how Speed Dial works
            Please Import SpeeDial, SpeedDialAction, and SpeeddialIcon
            and use them in your project.
            in SpeeddianAction, you can add icon prop
        </Typography>
        <SpeedDial ariaLabel='Navigation Speed dial' sx={{position:'absolute', bottom:16, right:16}} icon={<SpeedDialIcon  openIcon={<EditIcon/>}/> }>
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen/>
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
            <SpeedDialAction icon={<SaveIcon />} tooltipTitle='Save' />

        </SpeedDial>
    </div>
  )
}

export default SpeedDialPage