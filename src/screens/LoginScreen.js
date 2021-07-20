import React from 'react';
import LoginForm from '@components/LoginForm';
import {StyleSheet, View, Text} from 'react-native';

// React Stateless Function
function LoginScreen(props) {

    return (
        <View style={styles.container} >
            <LoginForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100
    }
})

export default LoginScreen;