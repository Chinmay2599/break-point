import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import ProjectSection from '../components/ProjectSection'

function Home() {
  return (
    <Box sx={{flexGrow: 1}}>
        <Navbar/>
          <ProjectSection/>
    </Box>
  )
}

export default Home