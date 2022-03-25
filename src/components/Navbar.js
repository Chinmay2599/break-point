import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { signUserIn, signUserOut } from '../redux/user/userActions';
import { connect } from 'react-redux';

function Navbar({signUserIn, uid, signUserOut}) {

    const isUserLoggedIn = () => {
        if(uid){
            return (
                <IconButton disableRipple onClick={signUserOut} color='inherit'>
                    <LogoutIcon color='inherit'/>
                </IconButton>
            )
        }else {
            return (
                <Button color='inherit' variant='outlined' onClick={signUserIn}>Sign in with Google</Button>
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

const mapStateToProps = state => {
    return {
        uid: state.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUserIn: ()=> dispatch(signUserIn()),
        signUserOut: ()=> dispatch(signUserOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)