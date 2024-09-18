import React from 'react';
import { TextInput } from 'react-native';
import { COLORS } from '../../constants/colors';

export function Input({ placeholder, value, onChangeText, secureTextEntry = false, className = '' }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      className={`bg-white border border-secondary rounded-md p-2 ${className}`}
      placeholderTextColor={COLORS.GRAY}
    />
  );
}