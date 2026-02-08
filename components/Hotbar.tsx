import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Hotbar() {
  const [selected, setSelected] = useState(-1);

  return (
    <View style={styles.container}>
      {Array.from({ length: 10 }, (_, i) => i + 1).map(item => (
        <TouchableOpacity
          key={item}
          style={[styles.box, selected === item && styles.selectedBox]}
          onPress={() => setSelected(item)}
        >
          <Text style={styles.number}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: '50%',
    marginRight: -175, // Half of the container width
    flexDirection: 'row',
  },
  box: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  selectedBox: {
    borderColor: 'yellow',
    backgroundColor: 'rgba(255, 255, 0, 0.3)',
  },
  number: {
    color: 'white',
    fontSize: 12,
  },
});