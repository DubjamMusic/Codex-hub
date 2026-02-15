/**
 * Formatting utilities for the HustleCodeX ecosystem
 */

/**
 * Formats XP values with K/M suffixes
 * @param xp - The XP value to format
 * @returns Formatted XP string (e.g., "1.2K", "5.3M")
 */
export const formatXP = (xp: number): string => {
  if (xp >= 1000000) return `${(xp / 1000000).toFixed(1)}M`;
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}K`;
  return xp.toString();
};

/**
 * Formats a date in a readable format
 * @param date - The date to format
 * @returns Formatted date string (e.g., "Jan 1, 2024")
 */
export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(dateObj);
};

/**
 * Formats a relative time string
 * @param date - The date to format
 * @returns Relative time string (e.g., "2 days ago", "in 3 hours")
 */
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 0) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
  if (diffHour > 0) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
  if (diffMin > 0) return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
  return 'just now';
};

/**
 * Formats a percentage value
 * @param value - The value (0-1 or 0-100)
 * @param total - Optional total value to calculate percentage
 * @returns Formatted percentage string (e.g., "75%")
 */
export const formatPercentage = (value: number, total?: number): string => {
  const percentage = total ? (value / total) * 100 : value > 1 ? value : value * 100;
  return `${Math.round(percentage)}%`;
};

/**
 * Formats days into a readable duration
 * @param days - The number of days
 * @returns Formatted duration string (e.g., "2y 3m 4d")
 */
export const formatDaysDuration = (days: number): string => {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = days % 30;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0) parts.push(`${months}m`);
  if (remainingDays > 0 || parts.length === 0) parts.push(`${remainingDays}d`);

  return parts.join(' ');
};

/**
 * Truncates text with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};
