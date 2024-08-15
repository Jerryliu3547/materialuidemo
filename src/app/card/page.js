import React from 'react'
import {Box, Card, CardContent, Typography, Button, CardActions, CardMedia} from '@mui/material'

const cardPage = () => {
  return (
    <div>
        cardPage
        <Box width='400px'>
            <Card>
                <CardMedia component='img' height='140' image='https://images.unsplash.com/photo-1723652386871-dc8793a47dfe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

                
                <CardContent>
                    <Typography variant='h5' gutterBottom>Card Title</Typography>
                    <Typography variant='body2' color='text.secondary'>Some quick example text to build on the card title and make up the bulk of the card's content.</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' color='primary' href='https://mui.com/material-ui/react-card/' target='_blank'>
                        Learn More about Card Doc
                    </Button>
                    <Button variant='outline' color='secondary'>
                        Share
                    </Button>
                </CardActions>
            </Card>
        </Box>

    </div>
  )
}

export default cardPage