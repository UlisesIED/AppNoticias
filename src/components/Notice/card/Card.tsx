import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { globalStyle } from '../../../assets/styles/globalStyles';
import { Separador } from '../../common';
import { styles } from './style';

/**
 * Calcula el área de un círculo.
 * @param {Object} noticia - El radio del círculo.
 *  - {object} source
 *  - {int} status
 *  - {string} author
 *  - {string} title
 *  - {string} description
 *  - {string} url
 *  - {string} urlToImage
 *  - {string} publishedAt
 *  - {string} content
 * @returns {JSX.Element} El área del círculo.
 */

export const Card = (props: any) => {

    const { noticia, navigation } = props;

    return (
        <TouchableOpacity
            style={styles.card_conteiner}
            activeOpacity={0.6}
        >
            <View style={styles.conteiner_image}>
                {
                    noticia && noticia.urlToImage
                        ?
                        <Image
                            source={{ uri: noticia?.urlToImage }}
                            style={styles.image_style}
                        />
                        : null
                }
            </View>
            <View style={styles.conteiner_info}>
                <View style={styles.card_header}>
                    <Text style={styles.card_title} numberOfLines={3}>{noticia?.title}</Text>
                </View>
                <View style={styles.card_body}>
                    <Text style={styles.card_subtitle} numberOfLines={6} ellipsizeMode="tail">{noticia?.description}</Text>
                </View>
                <Separador />
                <View
                    style={styles.card_footer}
                    onTouchEnd={() => navigation.navigate('Detalles', { noticia: noticia })
                    }
                >
                    <Text style={styles.card_footer_text}>Ver más {' '}</Text>
                    <Feather name="arrow-right" size={30} color={globalStyle.accento.color} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
