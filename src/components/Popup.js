import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

function Popup({ title, children, openPopup, setOpenPopup }) {

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Link Figma Acccount</div>
            </DialogTitle>
            <DialogContent dividers>
                You need to link your figma account to create a new project. Click on Figma Access to continue
            </DialogContent>
            <DialogActions>
                <Button
                    variant='outlined'
                    onClick={()=> setOpenPopup(false)}
                >Cancel
                </Button>
                <Button variant='contained'>Figma Access</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup