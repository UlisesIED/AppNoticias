import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Componente de separador de linea
 *
* @returns {JSX.Element} retorna el componente 
 
 */

export const Separador = () => {
    return (
        <View style={styles.line} />
    );
};

const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
    },
});
