import { Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/Auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()

    const clickHandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                localStorage.setItem('user', cred.user.uid)
                navigate('/home')

            })
            .catch(error => console.log(error.message))
    }


    return (
        <Paper sx={{
            width: '350px',
            padding: '16px',
        }}>
            <Stack spacing={2}>
                <Typography variant='h6' color='secondary'>Breakpoint</Typography>

                <Divider orientation='horizontal' />
                <TextField type='email' label='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <TextField type='password' label='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <TextField type='password' label='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <Button variant='contained' size='large' onClick={clickHandler}>Sign Up</Button>
                <Typography variant='subtitle1'>Already have an account? <Link to='/login'>Login</Link></Typography>
            </Stack>
        </Paper>
    )
}

export default Signup