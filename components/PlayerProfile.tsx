import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PlayerProfile() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://placekitten.com/50/50' }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>Player1</Text>
        <View style={styles.barsContainer}>
          <View style={styles.barContainer}>
            <View style={[styles.bar, styles.healthBar]} />
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.bar, styles.shieldBar]} />
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.bar, styles.energyBar]} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  barsContainer: {
    flexDirection: 'column',
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  bar: {
    height: 8,
    width: 100,
    borderRadius: 4,
  },
  healthBar: {
    backgroundColor: 'red',
  },
  shieldBar: {
    backgroundColor: 'silver',
  },
  energyBar: {
    backgroundColor: 'green',
  },
});