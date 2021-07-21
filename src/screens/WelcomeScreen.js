import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

// React Stateless Function
function WelcomeScreen(props) {
    return (
        <View style={{
            backgroundColor: "white",
            flex: 1,
        }}>
            {/* <ImageBackground
                style={style.background}
                source={require("../../assets/adaptive-icon.png")}
            >
            </ImageBackground> */}

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
                <View
                    style={{
                        backgroundColor: "yellow",
                        //flex: 1,
                        width: 100,
                        height: 100,
                    }} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
    }
})
export default WelcomeScreen;