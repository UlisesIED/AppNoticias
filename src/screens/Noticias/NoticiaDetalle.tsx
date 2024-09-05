import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { Separador } from '../../components/common';
import { styles } from './style';

/**
 * Componente para mostrar los detalles de una noticia específica.
 *
 * Este componente recibe una noticia a través de las props de la ruta y muestra
 * la imagen, el título, el autor, la fecha de publicación y el contenido de la noticia.
 *
 * @param {Object} props - Props del componente.
 * @param {Object} props.route - Propiedad de ruta que contiene los parámetros de la navegación.
 * @param {Object} props.route.params - Parámetros pasados a la pantalla.
 * @param {Object} props.route.params.noticia - Objeto que contiene los detalles de la noticia.
 * @param {string} props.route.params.noticia.title - Título de la noticia.
 * @param {string} props.route.params.noticia.urlToImage - URL de la imagen de la noticia.
 * @param {string} props.route.params.noticia.author - Autor de la noticia.
 * @param {string} props.route.params.noticia.publishedAt - Fecha de publicación de la noticia en formato ISO.
 * @param {string} props.route.params.noticia.content - Contenido de la noticia.
 *
 * @returns {JSX.Element} Componente que muestra los detalles de la noticia.
 */

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
