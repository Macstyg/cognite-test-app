import {Box, AppBar as MuiAppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom'

const LinkBehaviour = React.forwardRef<any, RouterLinkProps>(
    (props, ref) => (
        <RouterLink ref={ref} {...props} />
    )
)

const AppBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={LinkBehaviour} to="/chat">Open Chat</Button>
                    <Button color="inherit" component={LinkBehaviour} to="/">Home</Button>
                </Toolbar>
            </MuiAppBar>
        </Box>
    )
}

export default AppBar