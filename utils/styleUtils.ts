/**
 * Common style utilities for game components
 */

/**
 * Standard border radius for game UI elements
 */
export const BORDER_RADIUS = {
  small: 4,
  medium: 5,
  large: 10,
  circle: 25,
} as const;

/**
 * Standard spacing values
 */
export const SPACING = {
  xs: 2,
  sm: 4,
  md: 5,
  lg: 10,
  xl: 20,
} as const;

/**
 * Standard colors for game UI
 */
export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  selected: '#FFFF00',
  selectedBackground: 'rgba(255, 255, 0, 0.3)',
  overlay: 'rgba(0,0,0,0.5)',
} as const;

/**
 * Standard dimensions for game UI elements
 */
export const DIMENSIONS = {
  barWidth: 100,
  hotbarSlotSize: 30,
  avatarSize: 50,
} as const;
