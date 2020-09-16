import 'es6-promise';
import 'whatwg-fetch';

const baseUrl = "https://api.elaniin.dev"
const URI = '/api/menu';

function getMenuAsync() {
    const url = `${baseUrl}${URI}`;
    return fetch(url)
        .then((response) => {
            return response;
        });
}

export default {
    getMenuAsync,
};