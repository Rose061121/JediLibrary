import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View } from 'react-native';
import BookCover from './src/components/BookCover';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <BookCover />
      <StatusBar style='auto' />
    </View>
  );
}


