import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Dimensions } from 'react-native';
import BookList from './src/containers/BookList'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <BookList />
      <StatusBar style='auto' />
    </View>
  );
}


