import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {tailwind} from '@lib/tailwind';

const FormInput = props => {
  const {placeholder, label} = props;
  const error = "Error message here";
  return (
    <View>
      {/* overriding of style */}
      <Text style={[tailwind(classes.textLabel), {color: "black"}]}>{label}</Text>
      <TextInput {...props} placeholder={placeholder} style={tailwind(classes.textInput)} />
      {error ? (
        <Text style={tailwind(classes.textError)}>{error}</Text>
      ) : null}
    </View>
  );
};

const classes = {
  textLabel: 'mt-4 text-lg ',
  textError: 'text-red-500 text-xs',
  textInput: 'rounded border py-3 text-xl px-3',
};



export default FormInput;
