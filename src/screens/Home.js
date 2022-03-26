import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { signUserIn } from '../redux/user/userActions'

function Home({signUserIn, uid}) {

  const navigate = useNavigate()

  useEffect(()=> {
    if(uid){
      navigate('/dashboard')
    }
  }, [uid])

  const Action = () => {
    return (
      <Button color='inherit' variant='outlined' onClick={signUserIn}>Get Started</Button>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar action = {<Action/>}/>
      <Typography>Landing Page</Typography>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    uid: state.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUserIn: () => dispatch(signUserIn())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps) (Home)