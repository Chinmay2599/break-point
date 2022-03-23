import { AppBar, Avatar, Button, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { signOut } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectSection from '../components/ProjectSection'
import { auth, db } from '../firebase/Auth'

function Home() {
    const [userAccess, setUserAccess] = useState(localStorage.getItem('user'))
    const [data, setData] = useState(null);

    useEffect(() => {

        if (userAccess) {
            getUserData(userAccess)
        }

    }, [userAccess])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('Signed out')
                localStorage.removeItem('user')
                setUserAccess(null)
            })
            .catch(err => console.log(err))
    };

    const getUserData = userId => {
        const docRef = doc(db, 'users', userId)

        onSnapshot(docRef, doc => {
            console.log(doc.data())
            setData(doc.data())
        })
    }

    const userLoggedIn = () => {
        if (userAccess) {
            return <>
                <div onClick={handleClick}>
                    <Avatar>CI</Avatar>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </>
        } else {
            return <>
                <Button variant='outlined' component={Link} to='/login'>Login</Button>
                <Button variant='contained' component={Link} to='/signup'>Sign Up</Button>
            </>
        }
    }

    const showProjects = () => {
        if (userAccess) {
            return <ProjectSection data={data} />
        } else {
            return <div>Landing Page</div>
        }
    }

    return (
        <div className='App'>
            <AppBar sx={{
                backgroundColor: '#eeeeee'
            }}>
                <Toolbar >
                    <Typography variant='h6' color='primary'>Breakpoint</Typography>
                    <Box sx={{
                        flexGrow: 1
                    }}>

                    </Box>
                    <Box sx={{
                        flexGrow: 0
                    }}>
                        <Stack spacing={1} direction='row'>
                            {userLoggedIn()}
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                showProjects()
            }
        </div>
    )
}

export default Home