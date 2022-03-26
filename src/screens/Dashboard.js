import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProjectSection from '../components/ProjectSection'
import LogoutIcon from '@mui/icons-material/Logout';
import { signUserOut } from '../redux/user/userActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Dashboard({signUserOut, uid}) {

    const navigate = useNavigate()

    useEffect(()=> {
        if(!uid){
            navigate('/')
        }
    },[uid])

    const Action = () => {
        return (
            <IconButton disableRipple onClick={signUserOut} color='inherit'>
                <LogoutIcon color='inherit' />
            </IconButton>
        )
    }

    return (
        <Box>
            <Navbar action={ <Action/>} />
            <ProjectSection />
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
        signUserOut: () => dispatch(signUserOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)