import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Paper } from '@mui/material';
import DetailsModal from '../DetailsModal/DetailsModal';

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: 'picture',
        headerName: 'Picture',
        width: 120,
        renderCell: (params) => (
            <img
                src={params.value}
                alt=""
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    objectFit: 'cover',
                }}
            />
        ),
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 110 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'gender', headerName: 'Gender', width: 120 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
];

function GridView({ students }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleRowClick = (params) => {
        setSelectedStudent(params.row);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedStudent(null);
    };

    const rows = students.map(student => ({
        id: student.login.uuid,
        name: `${student.name.first} ${student.name.last}`,
        age: student.dob.age,
        email: student.email,
        gender: student.gender,
        phone: student.phone,
        city: student.location.city,
        state: student.location.state,
        country: student.location.country,
        picture: student.picture.large,
    }));

    return (
        <Box style={{ padding: '0 4%', width: "100%", maxWidth: "1380px", margin: "auto" }}>
            <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
                Students List
            </Typography>
            <Paper style={{ height: 530, width: '100%', }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                    onRowClick={handleRowClick}
                    sx={{
                        '& .MuiDataGrid-cell': {
                            border: 'none',
                        },
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#1976d2',
                            color: 'white',
                        },
                        '& .MuiDataGrid-footerContainer': {
                            borderTop: 'none',
                        },
                    }}
                />
            </Paper>
            {selectedStudent && (
                <DetailsModal
                    student={selectedStudent}
                    open={openModal}
                    onClose={handleCloseModal}
                />
            )}
        </Box>
    );
}

export default GridView;
