import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/colors';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth();

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-primary p-4">
      <Text className="text-3xl font-bold mb-6 text-secondary">Reset Password</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full bg-white border border-secondary rounded-md p-2 mb-4"
      />
      <Button title="Send Reset Link" onPress={handleResetPassword} />
      <Link href="/login" asChild>
        <Button title="Back to Login" variant="secondary" className="mt-4" />
      </Link>
    </View>
  );
}