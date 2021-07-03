import axios from 'axios';

// creating a request
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});