import axios from 'axios'

const baseUrl = 'htp://localhost:8080/api/movies';

export class movieApi {
    constructor() {}
    async getMovie(movieId) {
        const response = await axios.get(baseUrl + '/' + movieId);
        if (response.status === 200) {
            return response.data
        } else {
            return null;
        }
    }

    async getMovies() {
        console.log('getMovies()')
        const { data } = await axios.get(baseUrl);
        console.log('getMovies() data', data)
        return data;
    }

    async createMovie(movie) {
        console.log('MovieApi.createMovie() movie', movie)
        const response = await axios.post(baseUrl + '/' + movie);
        console.log('MovieApi.createMovie() response', response)
        if (response && response.status === 201) {
            return response.data.response
        } else {
            //send error response
        }
        return null;
    }

    async deleteMovie(movie_id) {
        
        const response = await axios.delete(baseUrl + '/' + movie_id, {});
        console.log('response', response)
        return response;
    }
}