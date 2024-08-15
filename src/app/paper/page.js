import React from 'react'
import Paper from '@mui/material/Paper'

const paperPage = () => {
  return (
    <div className='p-5 bg-slate-400'>
        <p>Paper is a flexible, composable component in Material-UI that can be used to build complex layouts. It provides a default box with a light grey background and a padding of 24px.</p>

        <Paper elevation={5}>
            <p>elevation prop controls the shadow</p>
            <h1>Hello Paper</h1>
            <p>This is a simple example of a Paper component.</p>
        </Paper>
    </div>
  )
}

export default paperPage