import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Popup from './Popup'
import ProjectCard from './ProjectCard'

function ProjectSection({ projects, figmaAccess }) {

    const [openPopup, setOpenPopup] = useState(false)

    const newProjectHandler = () => {
        if(!figmaAccess){
            setOpenPopup(true)
        }else{
            console.log('Figma is authenticated')
        }
    }

    return (
        <Box margin={2}>
            <Stack spacing={2}>
                <Stack direction='row' spacing={2}>
                    <Typography variant='h5'>Projects</Typography>
                    <Button onClick={newProjectHandler}>New Project</Button>
                    <Popup
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    />
                </Stack>
                <Grid container gap={2}>
                    {
                        projects.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <ProjectCard project={item} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Stack>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
        figmaAccess: state.figmaAccess
    }
}

export default connect(mapStateToProps)(ProjectSection)