import axios from 'axios';

const login = (email, password) => {
    return axios.post('/auth/signin', { email, password });
};

const fetchUsers = () => {
    return axios.get('/users');
}

//only authenticated users can do this request
const fetchMyUser = (headers) => {
    return axios.get('/me', headers);
}

const updateStatus = (headers, status) => {
    return axios.patch('/me', {status}, headers);
}

const updatePlace = (headers, place) => {
    return axios.patch('/me', {place}, headers);
}

export { login, fetchUsers, fetchMyUser, updateStatus, updatePlace};