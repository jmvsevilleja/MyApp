import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {tailwind} from '@lib/tailwind';

// React Stateless Function
function TailwindScreen(props) {
    return (
        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        Hello Tailwind
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TailwindScreen;