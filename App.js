import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookList from './src/containers/BookList'
import BookBackCover from './src/components/BookBackCover';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BookList'>
        <Stack.Screen name='BookList' component={BookList}/>
        <Stack.Screen name='BookBackCover' component={BookBackCover}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



