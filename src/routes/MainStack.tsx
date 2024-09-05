import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { globalStyle } from '../assets/styles/globalStyles';
import {
    NoticiaDetalle,
    NoticiasGeneral,
} from '../screens/Noticias';

/**
 * Navegador principal de la aplicación.
 *
 * Este componente define la estructura de navegación para la aplicación utilizando
 * un stack navigator. Incluye dos pantallas principales:
 * 
 * 1. **Home**: Muestra una lista de noticias generales.
 * 2. **Detalles**: Muestra detalles de una noticia específica.
 *
 * @component
 * @returns {JSX.Element} El componente de navegación principal con dos pantallas.
 */

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={NoticiasGeneral}
                options={{
                    title: 'Noticias del mundo',
                    headerStyle: globalStyle.color_primario,
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="Detalles"
                component={NoticiaDetalle}
                options={{
                    title: 'Detalles',
                    headerStyle: globalStyle.color_primario,
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
};
