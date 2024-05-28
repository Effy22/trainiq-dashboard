import axios from 'axios';

const API_URL = 'https://demotrainiq.com/case/dashboard';

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('fetchdata..: ', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
