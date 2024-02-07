// PatientService.js
import axios from 'axios';

const API_URL = 'https://65bafc92b4d53c066553cf67.mockapi.io/patients'; 




const PatientService = {
  getAllPatients: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  addPatient: async (patient) => {
    const response = await axios.post(API_URL, patient);
    return response.data;
  },

  updatePatient: async (id, patient) => {
    const response = await axios.put(`${API_URL}/${id}`, patient);
    return response.data;
  },

  deletePatient: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },
};

export default PatientService;
