'use client'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import React from 'react'
import {useState, useRef} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const page = () => {
  const  [open, setOpen] = useState(false) 
  const anchorRef = useRef(null)
  const handleToggle = () =>{
    setOpen((prevOpen)=>! prevOpen)
  }
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
            <Button color='inherit' href='https://mui.com/material-ui/react-menu/#positioned-menu' target='_blank'>Link to Menu-Docs</Button>
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Contact</Button>
            <Button color='inherit'>Help</Button>
            <Button
            color='inherit'
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<MenuIcon/>}
        >
         Menu
        </Button>
          </Stack>

          <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </Toolbar>

  

    </AppBar>
  )
}

export default page