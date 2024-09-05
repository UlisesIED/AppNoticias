import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { Card } from '../../components';
import { useNoticia } from '../../hooks';
import { styles } from './style';

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
