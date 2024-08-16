import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import React from 'react'

const page = () => {
  return (
    <AppBar position='static' color='success'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <CatchingPokemonIcon sx={{ mx: 1 }} />
            </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Pokédex
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Contact</Button>
            <Button color='inherit'>Help</Button>
          </Stack>
        </Toolbar>
  

    </AppBar>
  )
}

export default page