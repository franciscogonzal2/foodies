import 'es6-promise';
import 'whatwg-fetch';

const baseUrl = "https://api.elaniin.dev"
const URI = '/api/categories';

function getCategoriesAsync() {
    const url = `${baseUrl}${URI}`;
    return fetch(url)
        .then((response) => {
            return response;
        });
}

export default {
    getCategoriesAsync,
};