import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from '../firebase/Auth';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {

    const [userAccess, setUserAccess] = useState(localStorage.getItem('user'))

    const signInHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(result)
                console.log(user.accessToken)
                localStorage.setItem('user', user.accessToken)
                setUserAccess(user.accessToken)

            }).catch((error) => {
                console.log(error)
            });
    }

    const logoutHandler = () => {
        signOut(auth)
        localStorage.removeItem('user')
        setUserAccess(null)
    }

    const isUserLoggedIn = () => {
        if (userAccess) {
            return (
                <IconButton disableRipple onClick={logoutHandler} color='inherit'>
                    <LogoutIcon color='inherit' />
                </IconButton>
            )
        } else {
            return (
                <Button color='inherit' variant='outlined' onClick={signInHandler}>Sign in with Google</Button>
            )
        }
    }

    return (
        <AppBar
            position='sticky'
        >
            <Toolbar>
                <Typography variant='h6'>Breakpoint</Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
                {isUserLoggedIn()}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar