import React from 'react'
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookList from './src/containers/BookList'
import BookBackCover from './src/components/BookBackCover';
import BookInput from './src/admin/BookInput'

const Stack = createNativeStackNavigator();

export default function App() {

  const webApp = Platform.OS == 'web'

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={webApp ? 'BookInput' : 'BookList'}>
        <Stack.Screen name='BookList' component={BookList}/>
        <Stack.Screen name='BookBackCover' component={BookBackCover}/>
        <Stack.Screen name='BookInput' component={BookInput}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



