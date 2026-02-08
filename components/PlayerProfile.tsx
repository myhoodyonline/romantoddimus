import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar';
import { BAR_COLORS } from '../utils/barUtils';
import { BORDER_RADIUS, SPACING, COLORS, DIMENSIONS } from '../utils/styleUtils';

interface PlayerProfileProps {
  username?: string;
  avatarUri?: string;
  health?: number;
  maxHealth?: number;
  shield?: number;
  maxShield?: number;
  energy?: number;
  maxEnergy?: number;
  barWidth?: number;
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
  barWidth = DIMENSIONS.barWidth,
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
            style={[styles.bar, { width: barWidth }]}
          />
          <ProgressBar
            current={shield}
            max={maxShield}
            color={BAR_COLORS.shield}
            height={8}
            borderRadius={BORDER_RADIUS.small}
            style={[styles.bar, { width: barWidth }]}
          />
          <ProgressBar
            current={energy}
            max={maxEnergy}
            color={BAR_COLORS.energy}
            height={8}
            borderRadius={BORDER_RADIUS.small}
            style={[styles.bar, { width: barWidth }]}
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
    width: DIMENSIONS.avatarSize,
    height: DIMENSIONS.avatarSize,
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
    marginBottom: SPACING.sm,
  },
});