import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { globalStyle } from '../assets/styles/globalStyles';
import {
    NoticiaDetalle,
    NoticiasGeneral,
} from '../screens/Noticias';


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
