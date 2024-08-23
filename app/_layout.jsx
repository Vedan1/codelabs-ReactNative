import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <Slot/>
    <Stack>
      <Stack.Screen name="index"  options={{headerShown: false}} />
      <Stack.Screen name='(auth)' options={{headerShown: false}} />

    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
