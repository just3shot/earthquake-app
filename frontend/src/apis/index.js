import axios from 'axios'

export const fetchData = async () => {
    try {
        const response = await axios.get('/.netlify/functions/server');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


