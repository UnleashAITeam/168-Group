import { Slot, Stack } from 'expo-router';
import { useAuth } from '../hooks/useAuth';

export default function AppLayout() {
  const { user } = useAuth();

  return (
    <Stack>
      {user ? (
        <Stack>
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen name="notifications" options={{ title: 'Notifications' }} />
        </Stack>
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}