import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text,
  //TouchanbleWithoutFeedback,
  //TouchableOpacity,≠
  TouchableHighlight,
  Image, View, SafeAreaView,
  Button, Platform, Dimensions,
} from 'react-native';
import {useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  let x = 1;
  console.log('App executed');
  // react dimensions
  console.log('get screen:', Dimensions.get("screen"));
  // hooks dimensions
  console.log('useDimension: ',useDimensions());
  console.log('useOrientation', useDeviceOrientation());

  const handlePress = () => {
    console.log("Text Pressed")
  }
  const handleImagePress = () => {
    console.log("Image Pressed")
  }

  return (
    <SafeAreaView style={[styles.container, overrideStyle]}>
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
      <Button 
      color="blue" 
      title="Button" 
      onPress={()=>alert('Button Pressed')} 
      />
      <View style={{
        backgroundColor:"#f00",
        width: "100%",
        height: 70,}} 
      >
        
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const overrideStyle = {backgroundColor: "#ccc"} 
// OS
console.log(Platform.OS)
console.log(StatusBar.height) // null in IOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10 // ios not affected
  },
});
