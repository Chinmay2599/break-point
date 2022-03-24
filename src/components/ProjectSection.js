import { Box } from '@mui/material'
import React from 'react'

function ProjectSection() {
    const userAccessToken = localStorage.getItem('user')
    console.log(userAccessToken)
    return (
        <Box>{userAccessToken}</Box>
    )
}

export default ProjectSection