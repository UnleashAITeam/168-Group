import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/colors';

export function AuthForm({ onSubmit, submitButtonText, fields }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <View className="w-full">
      {fields.map((field) => (
        <TextInput
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          onChangeText={(text) => setFormData({ ...formData, [field]: text })}
          secureTextEntry={field === 'password' || field === 'confirmPassword'}
          className="bg-white border border-secondary rounded-md p-2 mb-4"
        />
      ))}
      <Button title={submitButtonText} onPress={handleSubmit} />
    </View>
  );
}