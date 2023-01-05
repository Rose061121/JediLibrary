import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native';

import BookCover from '../components/BookCover';
import Images from '../api/images';

const books = require('../api/api.json')

export default function BookList() {


  return (
    <SafeAreaView style={styles.container} >
      <FlatList 
        data={books}
        renderItem={(book) => <BookCover book={book}/>}
        />
    </SafeAreaView>
  );
}

const styles = {
    container: {
        justifyContent: 'center'
    }
}
