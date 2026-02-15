/**
 * Validation utilities for the HustleCodeX ecosystem
 */

/**
 * Validates a username
 * @param username - The username to validate
 * @returns true if valid, false otherwise
 */
export const validateUsername = (username: string): boolean => {
  if (!username || typeof username !== 'string') return false;
  return username.length >= 3 && username.length <= 20;
};

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns true if valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Validates a password strength
 * @param password - The password to validate
 * @returns true if valid (min 8 chars, at least 1 number, 1 letter), false otherwise
 */
export const validatePassword = (password: string): boolean => {
  if (!password || typeof password !== 'string') return false;
  if (password.length < 8) return false;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  return hasNumber && hasLetter;
};

/**
 * Validates XP value
 * @param xp - The XP value to validate
 * @returns true if valid (non-negative number), false otherwise
 */
export const validateXP = (xp: number): boolean => {
  return typeof xp === 'number' && xp >= 0 && !isNaN(xp);
};

/**
 * Validates a quest status
 * @param status - The status to validate
 * @returns true if valid status, false otherwise
 */
export const validateQuestStatus = (status: string): status is 'locked' | 'active' | 'completed' => {
  return ['locked', 'active', 'completed'].includes(status);
};
