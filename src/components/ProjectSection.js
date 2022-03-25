import { Box } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'

function ProjectSection({uid}) {

    return (
        <Box>{uid}</Box>
    )
}

const mapStateToProps = state => {
    return {
        uid: state.uid
    }
}

export default connect(mapStateToProps)(ProjectSection)