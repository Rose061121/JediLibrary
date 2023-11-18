import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { shareAsync } from 'expo-sharing';

export default function BookInput() {
  const [bookInfo, setBookInfo] = useState({
    title: '',
    era: '',
    author: '',
    releaseDate: '',
    summary: '',
    pages: '',
    ISBN: '',
    timeLine: '',
    isSeries: '',
  });

  const [error, setError] = useState(false);

  const submitBook = () => {
    isEmpty() ? setError(true) : console.log('bookinfo', bookInfo);
  };

  function isEmpty() {
    for (const [key, value] of Object.entries(bookInfo)) {
      !value ? setError(true) : setError(false);
    }
  }

  const handleChange = (e) => {
    const { data, titleToUpdate } = e;

    setBookInfo({
      ...bookInfo,
      [titleToUpdate]: data,
    });
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        {error ? (
          <Text style={styles.errorText}>Missing fields required</Text>
        ) : (
          <></>
        )}
        <View style={styles.inputContainer}>
          <Text>Book Title</Text>
          <TextInput
            value={bookInfo.title}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'title' });
            }}
            style={styles.bookInput}
            placeholder='Book Title'
            placeholderTextColor={'lightgrey'}
            name='title'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Book Era</Text>
          <TextInput
            value={bookInfo.era}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'era' });
            }}
            style={styles.bookInput}
            placeholder='Book Era'
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Book Author</Text>
          <TextInput
            value={bookInfo.author}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'author' });
            }}
            style={styles.bookInput}
            placeholder='Book Author'
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Release Date</Text>
          <TextInput
            value={bookInfo.releaseDate}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'releaseDate' });
            }}
            style={styles.bookInput}
            placeholder='Release Date'
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Book Summary</Text>
          <TextInput
            value={bookInfo.summary}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'summary' });
            }}
            style={styles.bookInput}
            placeholder='Book Summary'
            placeholderTextColor={'lightgrey'}
            name='summary'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>How many pages?</Text>
          <TextInput
            value={bookInfo.pages}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'pages' });
            }}
            style={styles.bookInput}
            placeholder='Pages'
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Book ISBN</Text>
          <TextInput
            value={bookInfo.ISBN}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'ISBN' });
            }}
            style={styles.bookInput}
            placeholder='Book ISBN'
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Book Timeline</Text>
          <TextInput
            value={bookInfo.timeLine}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'timeLine' });
            }}
            style={styles.bookInput}
            placeholder='Book Timeline'
            placeholderTextColor={'lightgrey'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Is this book in a series?</Text>
          <TextInput
            value={bookInfo.isSeries}
            onChangeText={(data) => {
              handleChange({ data, titleToUpdate: 'isSeries' });
            }}
            style={styles.bookInput}
            placeholder='Book Series?'
            placeholderTextColor={'lightgrey'}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
      <Button title='Submit' onPress={() => submitBook()} />
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  formContainer: { paddingHorizontal: 24, maxWidth: 400 },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookInput: {
    height: 50,
    backgroundColor: 'white',
    width: 150,
    justifyContent: 'center',
    paddingLeft: 5,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 24,
  },
buttonContainer: {
  maxWidth: 250,
  justifyContent: 'center',
  alignSelf: 'center'
}

});
