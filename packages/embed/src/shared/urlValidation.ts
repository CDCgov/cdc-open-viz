/**
 * URL validation utilities for the embed package
 *
 */

/**
 * Gets and validates the configUrl parameter from the current URL
 * Returns the validated configUrl if it's a valid relative URL, null otherwise
 *
 * @returns The validated configUrl or null if missing/invalid
 *
 * @example
 * const configUrl = getConfigUrlParam()
 * if (!configUrl) {
 *   // Show error - missing or invalid
 * }
 */
export function getConfigUrlParam(): string | null {
  const params = new URLSearchParams(window.location.search)
  const configUrl = params.get('configUrl')

  if (!configUrl) {
    return null
  }

  // Validate that it's a relative URL
  if (!isValidConfigUrl(configUrl)) {
    return null
  }

  return configUrl
}

/**
 * Validates that a configUrl is a relative URL (no protocol or host)
 *
 * Only relative URLs are allowed to ensure configs
 * are loaded from the same origin as the embed page.
 *
 * @param configUrl - The URL to validate
 * @returns true if the URL is valid (relative only), false otherwise
 *
 * @example
 * isValidConfigUrl('/path/to/config.json') // true
 * isValidConfigUrl('../config.json') // true
 * isValidConfigUrl('config.json') // true
 * isValidConfigUrl('https://evil.com/config.json') // false
 * isValidConfigUrl('//evil.com/config.json') // false
 * isValidConfigUrl('http://localhost/config.json') // false
 */
export function isValidConfigUrl(configUrl: string | null): boolean {
  if (!configUrl || typeof configUrl !== 'string') {
    return false
  }

  const trimmed = configUrl.trim()

  if (trimmed.length === 0) {
    return false
  }

  // Reject any URL that contains a protocol (http://, https://, ftp://, etc.)
  if (trimmed.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//)) {
    return false
  }

  // Reject protocol-relative URLs (//example.com/path)
  if (trimmed.startsWith('//')) {
    return false
  }

  // Reject URLs with protocols but no slashes (javascript:, data:, etc.)
  if (trimmed.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:/)) {
    return false
  }

  // Additional validation: Try to parse it as a URL relative to current origin
  try {
    const parsed = new URL(trimmed, window.location.origin)

    // Verify it's same origin
    if (parsed.origin !== window.location.origin) {
      return false
    }

    return true
  } catch (error) {
    return false
  }
}

/**
 * Validates a postMessage origin against allowed CDC domains
 *
 * @param origin - The origin to validate (from MessageEvent.origin)
 * @returns true if the origin is allowed, false otherwise
 */
export function isValidMessageOrigin(origin: string): boolean {
  if (!origin || typeof origin !== 'string') {
    return false
  }

  try {
    const url = new URL(origin)

    // Allow localhost for development (HTTP only)
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      return url.protocol === 'http:' || url.protocol === 'https:'
    }

    // Allow cdc.gov and any subdomain (HTTPS only)
    if (url.hostname === 'cdc.gov' || url.hostname.endsWith('.cdc.gov')) {
      return url.protocol === 'https:'
    }

    return false
  } catch (error) {
    return false
  }
}
