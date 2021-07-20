import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

// React Stateless Function
function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={style.background}
            source={require("../../assets/icon.png")}
        ></ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
    }
})
export default WelcomeScreen;