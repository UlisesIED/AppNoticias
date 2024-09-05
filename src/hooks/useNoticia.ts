import { useState } from 'react';
import {
    get_top_headlines_api,
} from '../api/noticias';

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
