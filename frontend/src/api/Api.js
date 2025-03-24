import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Ajusta según la configuración

const api = {
  async getSummary() {
    try {
      const response = await axios.get(`${API_BASE_URL}/summary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching summary data:', error);
      throw error;
    }
  }
};

export default api;
