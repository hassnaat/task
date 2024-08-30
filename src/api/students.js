import axiosInstance from './axiosInstance';

const getAllStudents = async () => {
    try {
        const response = await axiosInstance.get('?results=10');
        return {
            success: true,
            data: response.data.results,
        };
    } catch (error) {
        console.error('Error fetching students:', error);
        return {
            success: false,
            message: error.response?.data?.message || 'An error occurred while fetching students',
            status: error.response?.status || 500,
        };
    }
};

export default getAllStudents;
