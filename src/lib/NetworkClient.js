import client from './NetworkInterceptor';

const header = {
    Accept: 'application/json'
};

class NetworkClient {
    makeRequest(options) {
        return client(options).then((response) => {
            return response;
        }).catch(error => {
           console.log(error);
        })
    }

    get(url, params) {
        const options = {
            method: 'GET',
            url: url,
            header: header,
            params: params
        };

        return this.makeRequest(options);
    }

    post(url, params) {
        const options = {
            method: 'POST',
            url: url,
            header: header,
            params: params
        };
    }
}

export default new NetworkClient();
