import React from 'react';
import { View, StyleSheet, ViewStyle, DimensionValue } from 'react-native';
import { calculateBarWidth, DEFAULT_BAR_BACKGROUND } from '../utils/barUtils';
import { BORDER_RADIUS } from '../utils/styleUtils';

interface ProgressBarProps {
  current: number;
  max: number;
  color: string;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
}

/**
 * Reusable progress bar component for health, experience, energy, etc.
 */
export default function ProgressBar({
  current,
  max,
  color,
  height = 10,
  backgroundColor = DEFAULT_BAR_BACKGROUND,
  borderRadius = BORDER_RADIUS.medium,
  style,
}: ProgressBarProps) {
  const width = calculateBarWidth(current, max) as DimensionValue;

  return (
    <View style={[styles.container, { height, backgroundColor, borderRadius }, style]}>
      <View style={[styles.bar, { width, backgroundColor: color, borderRadius }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
  },
});
