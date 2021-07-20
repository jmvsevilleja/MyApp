import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {tailwind} from '@lib/tailwind';

// React Stateless Function
function TailwindScreen(props) {
    return (
        <SafeAreaView style={tailwind(classes.pageBody)}>
            <View style={tailwind(classes.formContainer)}>
                <View style={tailwind(classes.formHeading)}>
                    <Text>Hello</Text>
                </View>
            </View>
            <View style={tailwind(classes.formContainer)}>
                <Text style={tailwind(classes.btnContainer)}>
                    Hello Tailwind
                </Text>
            </View>
        </SafeAreaView>
    );
}

const classes = {
    pageBody: 'h-screen flex bg-gray-bg1',
    formContainer: 'py-10 px-16',
    formHeading: 'bg-blue-200 px-3 py-1 rounded-full',
    btnContainer: 'text-blue-800 font-semibold',
};

export default TailwindScreen;