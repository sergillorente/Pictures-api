import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID j1z-9w5CCgYCrTlkw_F1ONztXD2huf5LTwS1dL4elso'
    }
});