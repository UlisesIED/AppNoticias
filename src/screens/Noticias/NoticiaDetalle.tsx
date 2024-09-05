import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { Separador } from '../../components/common';
import { styles } from './style';

export const NoticiaDetalle = ({ route }) => {

    const { noticia } = route.params;

    console.log(noticia);

    return (
        <ScrollView>
            <View style={styles.view_conteiner_detail}>
                <Image
                    source={{ uri: noticia?.urlToImage }}
                    style={[styles.image_style]}
                />
                <Text style={styles.titulo_noticia_detalle}>{noticia.title}</Text>
                <Separador />
                <View style={styles.view_row}>
                    <Text style={styles.sub_noticia_detalle}>Autor: {noticia.author}</Text>
                    <Text style={[styles.sub_noticia_detalle, { textAlign: 'right' }]}>Fecha: {noticia.publishedAt.split('T')[0]}</Text>
                </View>
                <View style={styles.view_contenido_noticia}>
                    <Text style={styles.contenido_noticia}>Autor: {noticia.content}</Text>

                </View>
            </View>
        </ScrollView>
    );
};
