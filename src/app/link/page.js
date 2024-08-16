import React from 'react'
import {Stack, Link } from '@mui/material'

const page = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#' variant='body2'>Link</Link>

        <Link href='#' variant='h6' underline='none' color='salmon'>
            seconday no underline variant 6
        </Link>
    </Stack>
  )
}

export default page