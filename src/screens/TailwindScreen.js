import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {tailwind} from '@lib/tailwind';

// React Stateless Function
function TailwindScreen(props) {
    return (
        <SafeAreaView style={tailwind(classes.pageArea)}>
            <View style={tailwind(classes.pageBody)}>
                <View style={tailwind(classes.formContainer)}>
                    <Text style={tailwind(classes.txtHeading)}>
                        Payment successfull
                    </Text>
                    <Text style={tailwind(classes.txtContainer)}>
                        Lorem Ipsum dolor site amet
                    </Text>
                    <View style={tailwind(classes.btnContainer)}>
                        <Text style={tailwind(classes.btnText)}>
                            Go back to dashboard
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const classes = {
    pageArea: '',
    pageBody: 'h-full items-center bg-gray-500 p-12 p-40',
    formContainer: 'bg-white p-6 rounded-lg items-center',
    btnContainer: 'bg-indigo-600 py-2 items-center rounded-md mt-6',
    btnText: 'text-white font-medium',
    txtHeading: 'text-gray-800 text-xl font-medium mt-4',
    txtContainer: 'text-gray-500 text-center mt-2 w-56',
};

export default TailwindScreen;