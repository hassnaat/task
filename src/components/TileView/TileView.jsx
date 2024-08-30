import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import DetailsModal from '../DetailsModal/DetailsModal';



const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '12px',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: theme.shadows[6],
    },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    textAlign: 'center',
}));

const Avatar = styled('img')({
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginBottom: '16px',
});

const TileButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

function TileView({ students = [] }) {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleTileClick = (student) => {
        setSelectedStudent({
            name: `${student.name.title} ${student.name.first} ${student.name.last}`,
            age: student.dob.age,
            gender: student.gender,
            email: student.email,
            phone: student.phone,
            cell: student.cell,
            city: student.location.city,
            state: student.location.state,
            country: student.location.country,
            picture: student.picture.large,
        });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedStudent(null);
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{ my: 6 }}>
                {students?.map((student) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={student.login.uuid}>
                        <StyledCard>
                            <StyledCardContent>
                                <Avatar src={student.picture.medium} alt={`${student.name.first} ${student.name.last}`} />
                                <Typography variant="h6" color="textPrimary" gutterBottom>
                                    {`${student.name.first} ${student.name.last}`.substring(0, 14)}
                                    {`${student.name.first} ${student.name.last}`.length > 14 ? "..." : ""}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Age: {student.dob.age}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {student.email.substring(0, 28)}{student.email?.length > 25 ? "..." : ""}
                                </Typography>
                                <TileButton onClick={() => handleTileClick(student)}>
                                    View Details
                                </TileButton>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>


            <DetailsModal
                student={selectedStudent}
                open={modalOpen}
                onClose={handleCloseModal}
            />
        </Container>
    );
}

export default TileView;
