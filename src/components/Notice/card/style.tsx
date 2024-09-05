import { StyleSheet } from 'react-native';
import { globalStyle } from '../../../assets/styles/globalStyles';

export const styles = StyleSheet.create({
    card_conteiner: {
        backgroundColor: '#FAFAFA',
        color: globalStyle.texto.color,
        borderColor: globalStyle.accento.color,
        borderWidth: 1.15,
        margin: 15,
        flexDirection: 'row',
        borderRadius: 8,
        height: 205,
    },

    card_header: {
        height: 60,
    },
    card_body: {
        height: 90,
    },
    card_footer: {
        height: 50,
        flexDirection: 'row',

    },

    card_title: {
        color: globalStyle.texto.color,
        fontSize: 14,
        fontWeight: 'bold',
    },
    card_subtitle: {
        color: globalStyle.texto.color,
        fontSize: 12,
        fontWeight: '500',
    },
    card_footer_text: {
        color: globalStyle.accento.color,
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 7,
    },
    conteiner_image: {
        flex: globalStyle.col_4.flex,
        borderRightColor: globalStyle.accento.color,
        borderRightWidth: 1.15,
    },
    image_style: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    conteiner_info: {
        flex: globalStyle.col_6.flex,
        margin: 10,
        alignItems: 'flex-end',
        display: 'flex',

    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
    },

});
