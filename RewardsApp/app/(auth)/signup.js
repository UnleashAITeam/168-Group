import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { AuthForm } from '../../components/auth/AuthForm';
import { SocialLoginButtons } from '../../components/auth/SocialLoginButtons';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/colors';

export default function Signup() {
  const { signup } = useAuth();

  const handleSignup = async (formData) => {
    const { email, password, fullName } = formData;
    await signup(email, password, fullName);
  };

  return (
    <View className="flex-1 justify-center items-center bg-primary p-4">
      <Text className="text-3xl font-bold mb-6 text-secondary">Create Account</Text>
      <AuthForm
        onSubmit={handleSignup}
        submitButtonText="Sign Up"
        fields={['fullName', 'email', 'password', 'confirmPassword']}
      />
      <Text className="my-4 text-secondary">Or sign up with</Text>
      <SocialLoginButtons />
      <View className="mt-4">
        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text className="text-secondary">Already have an account? Log In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}