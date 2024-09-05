import {
    API_KEY,
    API_URL,
    COUNTRY,
} from '../utils/constants';

/**
 * Función para obtener las principales noticias desde una API externa.
 *
 * Esta función realiza una solicitud HTTP GET a la API de noticias para obtener
 * los titulares principales. Utiliza la API de NewsAPI para recuperar noticias de
 * una fuente específica (BBC News en este caso).
 *
 * @async
 * @function get_top_headlines_api
 * @returns {Promise<Object>} Una promesa que se resuelve en un objeto JSON que contiene los resultados de la solicitud.
 * @throws {Error} Lanza un error si la solicitud falla o si hay un problema con la recuperación de datos.
 * 
 * @example
 * const result = await get_top_headlines_api();
 * console.log(result);
 */

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
