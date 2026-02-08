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
 * Using hex codes for consistent theming
 */
export const BAR_COLORS = {
  health: '#FF0000',    // Red
  shield: '#C0C0C0',    // Silver
  energy: '#00FF00',    // Green
  experience: '#0000FF', // Blue
  mana: '#00FFFF',      // Cyan
} as const;

/**
 * Get standard background color for bars
 */
export const DEFAULT_BAR_BACKGROUND = 'rgba(0,0,0,0.5)';
