import React from 'react'
import { Typography } from '@mui/material'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Typography variant='h1'>Following is the default theme Link</Typography>
      <Typography variant='body1'><Link href='https://mui.com/material-ui/customization/default-theme/' target='_blank' >Material UI Default Theme</Link></Typography>
    </div>
  )
}

export default page
