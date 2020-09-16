import 'es6-promise';
import 'whatwg-fetch';

const baseUrl = "https://api.elaniin.dev"
const URI = '/api/contact';

function getContactAsync(data) {
    
    const url = `${baseUrl}${URI}`;
    return fetch(url, data)
        .then((response) => {
            return response;
        });
}

export default {
    getContactAsync,
};