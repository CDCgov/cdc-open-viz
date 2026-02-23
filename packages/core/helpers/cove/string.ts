/**
 * regex
 * - /\w\S* replaces zero or more whitespace characters
 * - g makes it find all matches in the string
 * - the callback function capitalizes the word
 * */
export const capitalizeSplitAndJoin = function (splittingCharacter: string = ' ', joiningCharacter: string = '') {
  return this.split(splittingCharacter)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(joiningCharacter)
}

/**
 * Sanitizes a string to be a valid SVG ID.
 * SVG IDs must:
 * - Start with a letter (A-Z, a-z) or underscore
 * - Contain only letters, digits, hyphens, and underscores
 * - Not contain spaces or most special characters
 *
 * @param input - The string to sanitize
 * @returns A valid SVG ID string
 */

export function sanitizeToSvgId(input: string): string {
  // Replace any character that is not alphanumeric, underscore, or hyphen with '-'
  let sanitized = String(input).replace(/[^A-Za-z0-9_-]/g, '-')

  // Collapse consecutive hyphens into a single hyphen for cleaner IDs
  sanitized = sanitized.replace(/-+/g, '-')

  // Ensure the first character is a letter or underscore, as required for robust SVG IDs
  if (!/^[A-Za-z_]/.test(sanitized)) {
    sanitized = `id-${sanitized}`
  }

  // Collapse any consecutive hyphens again (in case id- prefix created them)
  sanitized = sanitized.replace(/-+/g, '-')

  return sanitized
}
