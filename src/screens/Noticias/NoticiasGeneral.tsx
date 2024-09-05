import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { Card } from '../../components';
import { useNoticia } from '../../hooks';
import { styles } from './style';

/**
 * Componente que muestra una lista de noticias generales.
 *
 * Este componente utiliza un hook personalizado `useNoticia` para obtener las noticias
 * principales y las muestra en una lista utilizando el componente `Card`.
 *
 * @param {Object} props - Props del componente.
 * @param {Object} props.navigation - Objeto de navegación para manejar la navegación entre pantallas.
 *
 * @returns {JSX.Element} Componente que muestra una lista de noticias en tarjetas.
 */

export const NoticiasGeneral = ({ navigation }) => {

    const { getNoticiasTop, noticias } = useNoticia();

    useEffect(() => {
        const getData = async () => {
            await getNoticiasTop();
        };
        getData();
    }, []);


    return (
        <ScrollView>
            <View style={styles.view_conteiner}>
                {
                    noticias
                        ?
                        noticias?.articles.map((noticia: any, index: number) => (
                            <View
                                key={index}
                            >
                                <Card
                                    noticia={noticia}
                                    navigation={navigation}
                                />
                            </View>
                        ))
                        : null
                }
            </View>
        </ScrollView>

    );
};
