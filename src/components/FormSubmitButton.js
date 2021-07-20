import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {tailwind} from '@lib/tailwind';

const FormSubmitButton = ({title, submitting, onPress}) => {

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={tailwind(classes.buttonContainer)}
    >
      <Text style={tailwind(classes.textLabel)}>{title}</Text>
    </TouchableOpacity >
  );
};

const classes = {
  buttonContainer: 'rounded bg-blue-500 py-4 px-4 mt-4',
  textLabel: 'text-white text-center font-bold text-lg',
};



export default FormSubmitButton;
