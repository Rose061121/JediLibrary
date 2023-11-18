import React from 'react'
import { View, Text } from 'react-native';



export default function BookBackCover(props) {
  let book = props.route.params.otherParam
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{book.title}</Text>
        <Text>{book.summary}</Text>
    </View>
  );
}

const styles = {

  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 500,
    padding: 15
  },
  title: {
    fontSize: 20
  }
}

