import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import ProjectCard from './ProjectCard'

function ProjectSection({ projects }) {

    return (
        <Box margin={2}>
            <Typography variant='h6'>Projects</Typography>
            <Grid container spacing={2}>
                {
                    projects.map(item => {
                        return (
                            <Grid item xs={3}>
                                <ProjectCard project={item}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectSection)