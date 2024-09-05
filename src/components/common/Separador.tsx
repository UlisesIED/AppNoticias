import React from 'react';
import { StyleSheet, View } from 'react-native';

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
