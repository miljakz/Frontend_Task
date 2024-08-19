import axios from 'axios';

const API_BASE_URL = 'https://task-pal-backend-ps8kp9gzs-miljakzs-projects.vercel.app';

// Function to fetch tasks from the backend
export const fetchTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/tasks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks', error);
        throw error;
    }
};

export const postTask = async (task) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/tasks`, task);
        return response.data;
    } catch (error) {
        console.error('Error posting task', error);
        throw error;
    }
};
