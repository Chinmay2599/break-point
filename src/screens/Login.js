import { Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Auth';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const clickHandler = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(cred => 
            {
                localStorage.setItem('user', cred.user.uid)
                navigate('/')
                
            })
        .catch(error=> console.log(error.message))
    }

    return (
        <Paper sx={{
            width: '350px',
            padding: '16px',
        }}>
            <Stack spacing={2}>
                <Typography variant='h6' color='secondary'>Breakpoint</Typography>
                <Button startIcon={<GoogleIcon />} variant='outlined' size='large'>Login with Google</Button>
                <Divider orientation='horizontal' />
                <TextField type='email' label='Email' value={email} onChange={e=> setEmail(e.target.value)}/>
                <TextField type='password' label='Password' value={password} onChange={e=> setPassword(e.target.value)}/>
                <Button variant='contained' size='large' onClick={clickHandler}>Login</Button>
                <Typography variant='subtitle1'>Don't have an account? <Link to='/signup'>Sign Up</Link></Typography>
            </Stack>
        </Paper>
    )
}

export default Login