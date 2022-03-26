import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar({action}) {

    return (
        <AppBar
            position='sticky'
        >
            <Toolbar>
                <Typography variant='h5'>Breakpoint</Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
                {action}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar