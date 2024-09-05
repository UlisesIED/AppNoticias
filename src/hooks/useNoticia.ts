import { useState } from 'react';
import {
    get_top_headlines_api,
} from '../api/noticias';

/**
 * Hook para el uso de la API de Noticia.
 * En este se tiene un método para la extracción de noticias TOP
 *
* @returns {Object} Objeto con los siguientes atributos:
 *  - {Array} noticias - La lista de noticias obtenidas de la API.
 *  - {boolean} loading - El estado de carga, indica si los datos están siendo cargados.
 *  - {Function} getNoticiasTop - Función para obtener las noticias TOP desde la API.
 */

export function useNoticia() {

    const [noticias, setNoticias] = useState<any>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const getNoticiasTop = async () => {
        try {
            setLoading(true);
            const response = await get_top_headlines_api();
            setNoticias(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw (error);
        }
    };

    return {
        noticias,
        loading,
        getNoticiasTop,
    };
}
