import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { globalStyle } from './src/assets/styles/globalStyles';
import { MainNavigator } from './src/routes/MainStack';



function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView style={[globalStyle.scroll_style]}>
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
