import api from '../utils/api';

export const listAuthors = async () => {
    const response = await api.get('authors');
    return response.data
}

export const createAuthor = async (payload) => {
    const response = await api.post('authors', payload);
    return response.data;
};