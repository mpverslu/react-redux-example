import axios from 'axios';

/* 
    Door zo'n axios instance te maken kan je een baseURL
    meegeven waardoor je dus alleen axios.get('/posts') hoeft te doen
    ipv de volledige url, maakt alles wat leesbaarder.
*/

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
});

/* 
    Je kan hier ook standaard headers setten die altijd mee gestuurd moeten
    worden naar je API, maar dat hoeft niet in dit geval.
*/

//instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE';

export default instance;