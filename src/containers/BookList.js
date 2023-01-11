import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native';

import BookCover from '../components/BookCover';

const books = require('../api/api.json')

export default function BookList({navigation}) {

  return (
    <SafeAreaView style={styles.container} >
      <FlatList 
        data={books}
        renderItem={(book) => <BookCover book={book} navigation={navigation}/>}
        />
    </SafeAreaView>
  );
}

const styles = {
    container: {
        justifyContent: 'center'
    }
}
