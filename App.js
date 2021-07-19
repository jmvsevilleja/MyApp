import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text,
  //TouchanbleWithoutFeedback,
  //TouchableOpacity,≠
  TouchableHighlight,
  Image, View, SafeAreaView,
  Button, Platform, Dimensions,// StatusBar
} from 'react-native';
// Hooks
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {
  let x = 1;
  console.log('App executed');
  // react dimensions
  console.log('Get Screen:', Dimensions.get("screen"));
  // hooks dimensions
  console.log('useDimension: ', useDimensions());
  console.log('useOrientation', useDeviceOrientation());

  const handlePress = () => {
    console.log("Text Pressed")
  }
  const handleImagePress = () => {
    console.log("Image Pressed")
  }
  // object destructuring
  const {landscape} = useDeviceOrientation();

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        // width: 100,
        // height: 100,
        flexDirection: "row", //column,row-reverse
        justifyContent: "center", // main
        alignItems: "center", // secondary
        // alignContent: "center", // applicable to flexWrap
        //flexWrap: "wrap"

      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          //flex: 1,
          width: 100,
          height: 100,
          // flexShrink: 1, // same as flex -1
          // flexBasis: 100, //width or height
          // flexGrow: 1, // same as flex
          // alignSelf: "flex-start"
        }} />
      <View
        style={{
          backgroundColor: "gold",
          //flex: 1,
          width: 100,
          height: 100,
          position: "relative", // absolute by parent
          top: -20,
          left: 20,
        }} />
      <View
        style={{
          backgroundColor: "red",
          //flex: 1,
          width: 100,
          height: 100,
        }} />
      {/* <View
        style={{
          backgroundColor: "yellow",
          //flex: 1,
          width: 100,
          height: 100,
        }} /> */}
    </View>
  );
  return (
    // SafeAreaView is IOS only
    <SafeAreaView style={[styles.container, overrideStyle]}>
      <View style={{
        backgroundColor: "#f00",
        width: "100%",
        height: landscape ? "50%" : "30%",
      }}
      >

      </View>
      <Text>Hello World</Text>
      <Text onPress={handlePress}>Click Me!</Text>
      {/* Static Image */}
      <Image source={require("./app/assets/favicon.png")} />
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
      <Button
        color="blue"
        title="Button"
        onPress={() => alert('Button Pressed')}
      />
      {/* A string, either: 'auto', 'inverted', 'light', or 'dark'. */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const overrideStyle = {backgroundColor: "#ccc"}
// OS
console.log('Platform OS:', Platform.OS)
// Works only in StatusBar react-native
console.log('Statusbar Height', StatusBar.currentHeight) // null in IOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0 // ios not affected
  },
});
