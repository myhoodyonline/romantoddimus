import React from 'react';
import { StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import { BAR_COLORS } from '../utils/barUtils';

interface ExperienceBarProps {
  current?: number;
  max?: number;
}

export default function ExperienceBar({ current = 50, max = 100 }: ExperienceBarProps) {
  return (
    <ProgressBar
      current={current}
      max={max}
      color={BAR_COLORS.experience}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});