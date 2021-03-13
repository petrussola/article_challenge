import api from '../utils/api';

export const listAuthors = async () => {
    const response = await api.get('authors');
    return response.data
}