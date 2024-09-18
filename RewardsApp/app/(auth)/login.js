import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { AuthForm } from '../../components/auth/AuthForm';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/colors';

export default function Login() {
  const { login } = useAuth();

  const handleLogin = async (email, password) => {
    await login(email, password);
  };

  return (
    <View className="flex-1 justify-center items-center bg-primary p-4">
      <Text className="text-3xl font-bold mb-6 text-secondary">Welcome Back</Text>
      <AuthForm
        onSubmit={handleLogin}
        submitButtonText="Login"
        fields={['email', 'password']}
      />
      <View className="mt-4">
        <Link href="/signup" asChild>
          <TouchableOpacity>
            <Text className="text-secondary">Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Link href="/forgot-password" asChild>
        <TouchableOpacity className="mt-2">
          <Text className="text-secondary">Forgot Password?</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}