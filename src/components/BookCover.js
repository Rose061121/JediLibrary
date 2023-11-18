import React from 'react';
import { Image, Pressable } from 'react-native';
import Images from '../api/images';

export default function BookCover(props) {
  return (
    <Pressable
      onPress={() =>
        props.navigation.navigate('BookBackCover', {
          itemID: props.book.item.ISBN,
          otherParam: props.book.item,
        })
      }
    >
      <Image source={Images[props.book.item.imageId]} resizeMode='contain' />
    </Pressable>
  );
}
