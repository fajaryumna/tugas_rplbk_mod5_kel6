import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export const fetchPokemons = async (offset, limit) => {
    const response = await api.get(`?offset=${offset}&limit=${limit}`);
    return response.data;
};