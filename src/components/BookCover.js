import React from 'react'
import { View, Image } from 'react-native';
import Images from '../api/images';



export default function BookCover(props) {
  return (
    <View >
        <Image source={Images[props.book.item.imageId]} resizeMode='contain'/>
    </View>
  );
}

