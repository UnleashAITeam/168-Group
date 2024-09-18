import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/common/Button';
import { COLORS } from '../../constants/colors';
import * as Sharing from 'expo-sharing';

export default function QRCodeScreen() {
  const { user } = useAuth();
  const qrValue = `168group-user-${user.id}`;

  const handleShare = async () => {
    const qrCodeImage = await qrCodeRef.toDataURL();
    const shareOptions = {
      mimeType: 'image/png',
      dialogTitle: 'Share QR Code',
      UTI: 'public.png',
    };
    await Sharing.shareAsync(qrCodeImage, shareOptions);
  };

  let qrCodeRef;

  return (
    <View className="flex-1 justify-center items-center bg-primary p-4">
      <Text className="text-2xl font-bold text-secondary mb-6">Your Unique QR Code</Text>
      <View className="bg-white p-4 rounded-lg shadow-md">
        <QRCode
          value={qrValue}
          size={200}
          color={COLORS.SECONDARY}
          backgroundColor={COLORS.WHITE}
          getRef={(ref) => (qrCodeRef = ref)}
        />
      </View>
      <Text className="text-center mt-4 mb-6 text-secondary">
        Present this QR code to earn or redeem points at any 168Group business.
      </Text>
      <Button title="Share QR Code" onPress={handleShare} />
    </View>
  );
}