/**
 * Runtime data type used across visualization components.
 *
 * This type supports three formats:
 * 1. Plain array: Object[] - Used by most chart types
 * 2. Array with string index: Object[] & Record<string, Object> - Used by maps and some charts
 * 3. Pure object: Record<string, Object> - Used by some map implementations
 */
export type RuntimeData = (Object[] & Record<string, Object>) | Object[] | Record<string, Object>
