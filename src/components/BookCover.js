import { StyleSheet, Text, View, Image } from 'react-native';
import Images from '../api/images'

export default function BookCover() {
  return (
    <View style={styles.container}>
        <Image source={Images.SW_1} resizeMode="contain"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
