import { api } from '../../services/api';

export const loginUser = (username, email, password) => api.post('/users/session', { username, password, email });
export const registerUser = (username, email, password) => api.post('/users', { username, password, email });
