import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar';
import { BAR_COLORS } from '../utils/barUtils';
import { BORDER_RADIUS, SPACING, COLORS } from '../utils/styleUtils';

interface PlayerProfileProps {
  username?: string;
  avatarUri?: string;
  health?: number;
  maxHealth?: number;
  shield?: number;
  maxShield?: number;
  energy?: number;
  maxEnergy?: number;
}

export default function PlayerProfile({
  username = 'Player1',
  avatarUri = 'https://placekitten.com/50/50',
  health = 100,
  maxHealth = 100,
  shield = 100,
  maxShield = 100,
  energy = 100,
  maxEnergy = 100,
}: PlayerProfileProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUri }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.barsContainer}>
          <ProgressBar
            current={health}
            max={maxHealth}
            color={BAR_COLORS.health}
            height={8}
            borderRadius={BORDER_RADIUS.small}
            style={styles.bar}
          />
          <ProgressBar
            current={shield}
            max={maxShield}
            color={BAR_COLORS.shield}
            height={8}
            borderRadius={BORDER_RADIUS.small}
            style={styles.bar}
          />
          <ProgressBar
            current={energy}
            max={maxEnergy}
            color={BAR_COLORS.energy}
            height={8}
            borderRadius={BORDER_RADIUS.small}
            style={styles.bar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.overlay,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.large,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.circle,
    marginRight: SPACING.lg,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  username: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  barsContainer: {
    flexDirection: 'column',
  },
  bar: {
    width: 100,
    marginBottom: SPACING.sm,
  },
});