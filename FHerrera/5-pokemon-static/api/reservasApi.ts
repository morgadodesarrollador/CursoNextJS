
import axios from 'axios';

const reservasApi = axios.create({
    baseURL: 'http://localhost:3001/api'
})

export default reservasApi;