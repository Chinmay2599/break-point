import { Button } from '@mui/material'
import React from 'react'

function ProjectSection({data}) {

    const clickHandler = () => {

    }

    if(data){
        if(data.figmaAccess){
            return  <div>{JSON.stringify(data.projects)}</div>
        }else{
            return <Button onClick={clickHandler} variant='contained'>Link Figma Account</Button>
        }
    }else{
        return <div>Loading</div>
    }
}

export default ProjectSection