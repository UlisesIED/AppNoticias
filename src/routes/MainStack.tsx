import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { globalStyle } from '../assets/styles/globalStyles';


const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export const MainNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Noticias del mundo',
                    headerStyle: globalStyle.color_primario,
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name="Detalles"
                component={HomeScreen}
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
