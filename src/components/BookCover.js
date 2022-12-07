import React from 'react'
import { View, Image } from 'react-native';
import Images from '../api/images';

export default function BookCover() {
  return (
    <View >
        <Image source={Images.SW_1} resizeMode='contain'/>
    </View>
  );
}

