import axios from 'axios';
import {setupCache} from 'axios-cache-adapter'

/**
 * Set up cache adapter
 */
const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

const client = axios.create({
    adapter: cache.adapter
});

/**
 * Before send request
 */
client.interceptors.request.use(
    config => {
        // Set request config like header, jwt token
        return config;
    },
    err => {
        return Promise.reject(err)
    }
);

/**
 * Before handle response
 */
client.interceptors.response.use(
    response => {
       if (response.status !== 200) {
           /**
            * api request failed
            */
           return [];
       } else {
           return response.data;
       }

    },
    error => {
        console.log('Error');
        // Global error handle
        return Promise.reject(error);
    }
);


export default client;
