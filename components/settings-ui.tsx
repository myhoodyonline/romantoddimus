import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface SettingsUIProps {
  onClose: () => void;
}

export default function SettingsUI({ onClose }: SettingsUIProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {/* Add your settings components here */}
      <Button title="Close" onPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});