import axios from 'axios';

const API_URL = 'https://backend-beta-wheat.vercel.app';

export const uploadFile = async (data) => {

    try {
    
        const response = await axios.post(`${API_URL}/upload`, data);

        return response.data;
        
    } catch (error) {
        console.error('Error while calling the API');
    }
} 
