import React from 'react'
import {Grid} from '@mui/material'



const GridPage = () => {
  return (
    <>
        <p>xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors</p>
        <Grid container gap={2}>
            <Grid item xs={12} sx={{bgcolor:'blue'}}>
                Grid item 1
            </Grid>
            <Grid item xs={12} sm={6} sx={{bgcolor:'blue'}}>
                Grid item 2
            </Grid>
            <Grid item xs={12} sm={6} sx={{bgcolor:'blue'}}>
                Grid item 3
            </Grid>
            <Grid item xs={6} sm={4} sx={{bgcolor:'blue'}}>
                Grid item 4
            </Grid>
            <Grid item xs={6} sm={4} sx={{bgcolor:'blue'}}>
                Grid item 5
            </Grid>
            <Grid item xs={6} sm={4} sx={{bgcolor:'blue'}}>
                Grid item 6
            </Grid>
        </Grid>
    </>

  )
}

export default GridPage