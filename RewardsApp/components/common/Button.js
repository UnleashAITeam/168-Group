import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../constants/colors';

export function Button({ onPress, title, variant = 'primary', className = '' }) {
  const baseStyle = 'py-2 px-4 rounded-md';
  const variantStyles = {
    primary: 'bg-secondary',
    secondary: 'bg-primary border border-secondary',
  };
  const textStyles = {
    primary: 'text-primary font-semibold',
    secondary: 'text-secondary font-semibold',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      <Text className={textStyles[variant]}>{title}</Text>
    </TouchableOpacity>
  );
}