import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './Modals.css'


const Modals = ({ open, handleClose, image }) => {
    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="image">
            <Box class="modales">
                <img src={image} />
            </Box>
        </Modal>
    )
}

export default Modals