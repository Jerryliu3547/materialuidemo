import React from 'react'
import { Box, Button, Typography, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar,  Avatar, ListItemButton, Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

const page = () => {
  return (
    <div>
        <Box sx={{width:'400px'}} className="bg-slate-300">
            <List>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Primary Text' secondary='with listItem Icon' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                            <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Secondary Text' secondary='with ListItemAvatar' />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary='inline button with padding disabled' secondary='secondary' />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>

    </div>
  )
}

export default page