import React from 'react';
import { View } from 'react-native';
import { Button } from '../common/Button';
import { useAuth } from '../../hooks/useAuth';

export function SocialLoginButtons() {
  const { loginWithGoogle, loginWithFacebook, loginWithApple } = useAuth();

  return (
    <View className="w-full space-y-2">
      <Button
        title="Continue with Google"
        onPress={loginWithGoogle}
        variant="secondary"
        icon="google"
      />
      <Button
        title="Continue with Facebook"
        onPress={loginWithFacebook}
        variant="secondary"
        icon="facebook"
      />
      <Button
        title="Continue with Apple"
        onPress={loginWithApple}
        variant="secondary"
        icon="apple"
      />
    </View>
  );
}