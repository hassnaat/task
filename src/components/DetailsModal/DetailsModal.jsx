import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, Box, Divider, Button, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DetailsModal = ({ student, open, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (!student) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                style: {
                    borderRadius: isMobile ? 8 : 16,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
            }}
        >
            <DialogTitle
                sx={{
                    backgroundColor: '#333',
                    color: '#FFFFFF',
                    borderBottom: '1px solid #444444',
                    position: 'relative',
                    padding: isMobile ? '12px 16px' : '16px 24px',
                    borderTopRightRadius: isMobile ? 8 : 16,
                    borderTopLeftRadius: isMobile ? 8 : 16,
                }}
            >
                <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold' }}>
                    Student Details
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                    aria-label="close"
                    sx={{ position: 'absolute', top: 10, right: 10, color: '#FFFFFF' }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent
                sx={{
                    padding: isMobile ? '16px' : '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#F5F5F5',
                }}
            >
                <Box
                    display="flex"
                    sx={{ width: '100%', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'flex-start' }}
                >
                    <Box
                        component="img"
                        src={student?.picture}
                        alt={`${student?.name}`}
                        sx={{
                            width: isMobile ? 80 : 120,
                            height: isMobile ? 80 : 120,
                            borderRadius: '10px',
                            objectFit: 'cover',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                            mt: 2,
                            mr: isMobile ? 0 : 5,
                            mb: isMobile ? 2 : 0,
                        }}
                    />
                    <Box sx={{ paddingTop: isMobile ? 0 : "20px" }}>
                        <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 'bold', mb: 1, color: '#333333' }}>
                            {student?.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
                            Age: {student?.age}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
                            Gender: {student?.gender}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
                            Email: {student?.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
                            Phone: {student?.phone}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
                            City: {student?.city}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5 }}>
                            State: {student?.state}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Country: {student?.country}
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ mb: 2, borderColor: '#E0E0E0' }} />
            </DialogContent>
            <DialogActions
                sx={{
                    padding: isMobile ? '12px 16px' : '16px 24px',
                    backgroundColor: '#F5F5F5',
                    borderTop: '1px solid #E0E0E0',
                    borderBottomRightRadius: isMobile ? 8 : 16,
                    borderBottomLeftRadius: isMobile ? 8 : 16,
                }}
            >
                <Button onClick={onClose} sx={{ background: "#333" }} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailsModal;
