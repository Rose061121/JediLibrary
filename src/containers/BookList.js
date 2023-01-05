import React from 'react'
import { View, Image, FlatList, Text, SafeAreaView } from 'react-native';

import Images from '../api/images';

const books = require('../api/api.json')

export default function BookList() {


  return (
    <SafeAreaView >
      <FlatList 
        data={books}
        renderItem={(book) => <Text>{book.item.title}</Text>}
        />
    </SafeAreaView>
  );
}

