import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ExperienceBar() {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bar: {
    height: '100%',
    width: '50%', // Example of 50% experience
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});