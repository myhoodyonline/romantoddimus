/**
 * Utility functions for rendering game bars (health, experience, etc.)
 */

export interface BarConfig {
  current: number;
  max: number;
  color: string;
  backgroundColor?: string;
}

/**
 * Calculate the percentage width for a bar
 * @param current Current value
 * @param max Maximum value
 * @returns Percentage string (e.g., "75%")
 */
export function calculateBarWidth(current: number, max: number): string {
  if (max <= 0) return '0%';
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  return `${percentage}%`;
}

/**
 * Get standard bar colors for common game stats
 */
export const BAR_COLORS = {
  health: 'red',
  shield: 'silver',
  energy: 'green',
  experience: 'blue',
  mana: 'cyan',
} as const;

/**
 * Get standard background color for bars
 */
export const DEFAULT_BAR_BACKGROUND = 'rgba(0,0,0,0.5)';
