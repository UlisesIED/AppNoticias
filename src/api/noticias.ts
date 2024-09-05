import {
    API_KEY,
    API_URL,
    COUNTRY,
} from '../utils/constants';

export const get_top_headlines_api = async () => {
    try {
        //        const url = `${API_URL}top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f129bf5597f14222b83616f8d244642f';
        const params = {
            method: 'GET',
            headers: {},
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw (error);
    }
};
