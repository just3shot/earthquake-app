export const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/data');
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

