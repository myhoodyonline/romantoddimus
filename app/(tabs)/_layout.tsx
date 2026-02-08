import { Stack } from 'expo-router';

export default function AppLayout(): React.JSX.Element() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
