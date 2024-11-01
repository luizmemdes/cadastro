import axios from 'axios';
import User from '../Interfaces/User';
const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers:{
        'Content-Type': 'application/json',
        'Accept': "*"
    }
})

export const criar = (data: User) => {
    return apiClient.post('/User', data)
}