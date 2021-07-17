import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text,
  //TouchableWithoutFeedback,
  //TouchableOpacity,
  TouchableHighlight,
  Image, View, SafeAreaView
} from 'react-native';

export default function App() {
  let x = 1;
  console.log('App executed');

  const handlePress = () => {
    console.log("Text Pressed")
  }
  const handleImagePress = () => {
    console.log("Image Pressed")
  }

  return (
    <SafeAreaView style={[styles.container, otherStyle]}>
      <Text>Hello World</Text>
      <Text onPress={handlePress}>Click Me!</Text>
      {/* Static Image */}
      <Image source={require("./assets/favicon.png")} />
      {/* Network Image */}
      <TouchableHighlight onPress={handleImagePress}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://reactjs.org/logo-og.png",
          }}
        />
      </TouchableHighlight>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const otherStyle = {backgroundColor: "#ccc"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
