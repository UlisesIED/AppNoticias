import { StyleSheet } from 'react-native';
import { globalStyle } from '../../assets/styles/globalStyles';

export const styles = StyleSheet.create({
    view_conteiner: {
        margin: 15,
        height: '100%',
    },
    view_conteiner_detail: {
        marginBottom: 15,
        marginTop: 15,
        paddingRight: 18,
        paddingLeft: 18,
        height: '100%',
        width: '100%',
    },
    titulo_noticia_detalle: {
        color: globalStyle.texto.color,
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 12,
    },
    sub_noticia_detalle: {
        color: globalStyle.texto.color,
        fontSize: 14,
        fontWeight: '300',
        flex: globalStyle.col_1.flex,
    },
    view_row: {
        flexDirection: 'row',
    },
    image_style: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 20, // Android
    },
    view_contenido_noticia: {
        marginVertical: 18,
    },
    contenido_noticia: {
        color: globalStyle.texto.color,
        fontSize: 16,
        fontWeight: '300',
    },
});
