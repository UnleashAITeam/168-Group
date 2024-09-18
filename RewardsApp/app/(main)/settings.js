import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useSettings } from '../../hooks/useSettings';
import { Button } from '../../components/common/Button';
import { COLORS } from '../../constants/colors';

export default function SettingsScreen() {
  const { logout } = useAuth();
  const { settings, updateSetting } = useSettings();

  return (
    <View className="flex-1 bg-primary p-4">
      <Text className="text-2xl font-bold text-secondary mb-4">Settings</Text>
      <View className="bg-white rounded-lg p-4 mb-4">
        <Text className="text-lg font-semibold text-secondary mb-2">Notifications</Text>
        <View className="flex-row justify-between items-center mb-2">
          <Text>Promotions</Text>
          <Switch
            value={settings.promotionNotifications}
            onValueChange={(value) => updateSetting('promotionNotifications', value)}
          />
        </View>
        <View className="flex-row justify-between items-center mb-2">
          <Text>Point Updates</Text>
          <Switch
            value={settings.pointNotifications}
            onValueChange={(value) => updateSetting('pointNotifications', value)}
          />
        </View>
      </View>
      <View className="bg-white rounded-lg p-4 mb-4">
        <Text className="text-lg font-semibold text-secondary mb-2">Account</Text>
        <Button
          title="Change Password"
          onPress={() => {/* Navigate to change password screen */}}
          variant="secondary"
          className="mb-2"
        />
        <Button
          title="Privacy Policy"
          onPress={() => {/* Navigate to privacy policy screen */}}
          variant="secondary"
          className="mb-2"
        />
        <Button
          title="Terms of Service"
          onPress={() => {/* Navigate to terms of service screen */}}
          variant="secondary"
          className="mb-2"
        />
      </View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}