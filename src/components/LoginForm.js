import React from 'react';
import {tailwind} from '@lib/tailwind';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import FormContainer from './FormContainer';
import {View, StyleSheet, Text, TextInput} from 'react-native';

// React Stateless Function
function LoginScreen(props) {

    const error = "";
    const email = "";
    const password = "";

    const submitForm = async () => {
        console.log('Form Submitted');
    };

    return (
        <FormContainer>
            <View>
                <Text style={tailwind(classes.textLabel)}>Login</Text>
            </View>
            {error ? (
                <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
                    {error}
                </Text>
            ) : null}
            <FormInput
                value={email}
                onChangeText={value => handleOnChangeText(value, 'email')}
                label='Email'
                placeholder='example@email.com'
                autoCapitalize='none'
            />
            <FormInput
                value={password}
                onChangeText={value => handleOnChangeText(value, 'password')}
                label='Password'
                placeholder='********'
                autoCapitalize='none'
                secureTextEntry
            />
            <FormSubmitButton onPress={submitForm} title='CREATE ACCOUNT' />
        </FormContainer>
    );
}

const classes = {
    textLabel: 'text-black text-center text-3xl',
};

export default LoginScreen;