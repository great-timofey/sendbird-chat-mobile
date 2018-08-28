import { api } from '../../services/api';

export const searchUser = (query = '', token) => api.get(`/users?search=${query}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
