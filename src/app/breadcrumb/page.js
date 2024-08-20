import React from 'react'
import {Box, Link, Typography, Breadcrumbs} from '@mui/material'
import  NavigateNextIcon  from '@mui/icons-material/NavigateNext'

const page = () => {
  return (
    <Box m={2}>
        <Typography gutterBottom variant='h5'>There are 4 props: seperator, maxItems, itemsBeforeCollapse, itemsAfterCollapse</Typography>
        <Breadcrumbs 
            separator={<NavigateNextIcon/>} 
            maxItems={3}
            itemsAfterCollapse={2}
            itemsBeforeCollapse={2}
            >
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Link underline='hover' href='#'>computers</Link>
            <Link underline='hover' href='https://mui.com/material-ui/react-breadcrumbs/' target='_blank' >Link to Docs</Link>
            <Typography>Parts</Typography>

        </Breadcrumbs>

    </Box>
  )
}

export default page