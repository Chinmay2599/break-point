import { Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

function ProjectCard({ project }) {

    const clickHandler = () => {
        console.log(project.name)
    }

    return (
        <Card onClick={clickHandler} sx={{cursor: 'pointer'}}>
            <CardHeader
                title={project.name}
                action={
                    <Stack direction='row' spacing={1}>
                        <IconButton>
                            <VisibilityIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Stack>
                }
            />
            <CardContent>
                <Typography variant='body2'>{project.lastEdited}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard