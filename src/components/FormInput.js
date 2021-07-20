import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {tailwind} from '@lib/tailwind';

const FormInput = props => {
  const {placeholder, label, error} = props;
  return (
    <>
      <View>
        <Text style={tailwind(classes.textLabel)}>{label}</Text>
        {error ? (
          <Text style={{color: 'red', fontSize: 16}}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={tailwind(classes.textInput)} />
    </>
  );
};

const classes = {
  textLabel: 'mt-4 font-bold text-lg ',
  textError: '',
  textInput: 'border py-2 px-3',
};



export default FormInput;
