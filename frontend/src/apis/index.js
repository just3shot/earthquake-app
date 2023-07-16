import axios from 'axios'

export const fetchData = async () => {
    try {
        const response = await axios.get('/.netlify/functions/server');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const getNews = async () => {
    try {
        const response = await axios.get('/.netlify/functions/getNews');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from News API', error);
        return null;
    }
}


