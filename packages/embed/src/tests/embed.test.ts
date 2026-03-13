// @vitest-environment jsdom
// embed.test.ts

import { beforeAll, beforeEach, afterEach, expect, describe, it, vi } from 'vitest'
import { isValidMessageOrigin } from '@cdc/core/helpers/embed/urlValidation'

describe('URL Validation', () => {
  describe('configUrl validation logic', () => {
    function testConfigUrlPattern(url: any): boolean {
      if (!url || typeof url !== 'string') {
        return false
      }

      const trimmed = url.trim()

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

      // If it passes all checks, it's a relative URL
      return true
    }

    describe('should accept valid relative URLs', () => {
      it('accepts absolute paths starting with /', () => {
        expect(testConfigUrlPattern('/path/to/config.json')).toBe(true)
      })

      it('accepts relative paths', () => {
        expect(testConfigUrlPattern('config.json')).toBe(true)
        expect(testConfigUrlPattern('./config.json')).toBe(true)
        expect(testConfigUrlPattern('../config.json')).toBe(true)
      })

      it('accepts paths with query parameters', () => {
        expect(testConfigUrlPattern('/config.json?version=1')).toBe(true)
      })

      it('accepts paths with multiple directory levels', () => {
        expect(testConfigUrlPattern('/data/visualizations/config.json')).toBe(true)
      })
    })

    describe('should reject URLs with protocols', () => {
      it('rejects https URLs', () => {
        expect(testConfigUrlPattern('https://www.cdc.gov/config.json')).toBe(false)
        expect(testConfigUrlPattern('https://evil.com/config.json')).toBe(false)
      })

      it('rejects http URLs', () => {
        expect(testConfigUrlPattern('http://www.cdc.gov/config.json')).toBe(false)
        expect(testConfigUrlPattern('http://localhost/config.json')).toBe(false)
      })

      it('rejects protocol-relative URLs', () => {
        expect(testConfigUrlPattern('//www.cdc.gov/config.json')).toBe(false)
        expect(testConfigUrlPattern('//evil.com/config.json')).toBe(false)
      })

      it('rejects dangerous protocols', () => {
        expect(testConfigUrlPattern('javascript:alert(1)')).toBe(false)
        expect(testConfigUrlPattern('data:text/html,<script>alert(1)</script>')).toBe(false)
        expect(testConfigUrlPattern('file:///etc/passwd')).toBe(false)
      })
    })

    describe('should handle edge cases', () => {
      it('rejects null and undefined', () => {
        expect(testConfigUrlPattern(null)).toBe(false)
        expect(testConfigUrlPattern(undefined)).toBe(false)
      })

      it('rejects empty strings', () => {
        expect(testConfigUrlPattern('')).toBe(false)
        expect(testConfigUrlPattern('   ')).toBe(false)
      })

      it('rejects non-string values', () => {
        expect(testConfigUrlPattern(123)).toBe(false)
        expect(testConfigUrlPattern({})).toBe(false)
        expect(testConfigUrlPattern([])).toBe(false)
      })
    })
  })

  describe('isValidMessageOrigin', () => {
    describe('should accept valid CDC origins', () => {
      it('accepts cdc.gov with HTTPS', () => {
        expect(isValidMessageOrigin('https://cdc.gov')).toBe(true)
      })

      it('accepts www.cdc.gov with HTTPS', () => {
        expect(isValidMessageOrigin('https://www.cdc.gov')).toBe(true)
      })

      it('accepts CDC subdomains with HTTPS', () => {
        expect(isValidMessageOrigin('https://wcms-wp-test.cdc.gov')).toBe(true)
        expect(isValidMessageOrigin('https://data.cdc.gov')).toBe(true)
      })

      it('handles case insensitivity correctly', () => {
        // URL parsing automatically lowercases hostname
        expect(isValidMessageOrigin('https://WWW.CDC.GOV')).toBe(true)
        expect(isValidMessageOrigin('https://Www.Cdc.Gov')).toBe(true)
      })
    })

    describe('should accept localhost for development', () => {
      it('accepts localhost with HTTP', () => {
        expect(isValidMessageOrigin('http://localhost')).toBe(true)
      })

      it('accepts localhost with HTTPS', () => {
        expect(isValidMessageOrigin('https://localhost')).toBe(true)
      })

      it('accepts localhost with ports', () => {
        expect(isValidMessageOrigin('http://localhost:8080')).toBe(true)
        expect(isValidMessageOrigin('http://localhost:3000')).toBe(true)
      })

      it('accepts 127.0.0.1 with HTTP', () => {
        expect(isValidMessageOrigin('http://127.0.0.1')).toBe(true)
        expect(isValidMessageOrigin('http://127.0.0.1:8080')).toBe(true)
      })
    })

    describe('should reject invalid origins', () => {
      it('rejects HTTP for cdc.gov (requires HTTPS)', () => {
        expect(isValidMessageOrigin('http://www.cdc.gov')).toBe(false)
        expect(isValidMessageOrigin('http://cdc.gov')).toBe(false)
      })

      it('rejects non-CDC domains', () => {
        expect(isValidMessageOrigin('https://evil.com')).toBe(false)
        expect(isValidMessageOrigin('https://cdc.gov.evil.com')).toBe(false)
        expect(isValidMessageOrigin('https://notcdc.gov')).toBe(false)
      })

      it('rejects malformed origins', () => {
        expect(isValidMessageOrigin('not-a-url')).toBe(false)
        expect(isValidMessageOrigin('javascript:alert(1)')).toBe(false)
      })

      it('rejects null and undefined', () => {
        expect(isValidMessageOrigin(null as any)).toBe(false)
        expect(isValidMessageOrigin(undefined as any)).toBe(false)
      })

      it('rejects empty strings', () => {
        expect(isValidMessageOrigin('')).toBe(false)
      })
    })
  })

  describe('embed helper message filtering', () => {
    beforeAll(async () => {
      await import('@cdc/core/helpers/embed/embedHelper.js')
    })

    beforeEach(() => {
      document.body.innerHTML = ''
    })

    afterEach(() => {
      vi.restoreAllMocks()
      document.body.innerHTML = ''
    })

    it('ignores unrelated postMessage traffic without warning', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      window.dispatchEvent(
        new MessageEvent('message', {
          origin: 'https://evil.com',
          data: { type: 'webpack:status', foo: 'bar' }
        })
      )

      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('rejects cove messages from invalid origins and logs context once', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

      window.dispatchEvent(
        new MessageEvent('message', {
          origin: 'https://evil.com',
          data: { type: 'cove:resize', id: 'cove-1', height: 420 }
        })
      )

      expect(warnSpy).toHaveBeenCalledTimes(1)
      expect(warnSpy).toHaveBeenCalledWith(
        'CDC COVE Embed Helper: Rejected COVE message from invalid origin',
        expect.objectContaining({
          origin: 'https://evil.com',
          type: 'cove:resize',
          id: 'cove-1'
        })
      )
    })

    it('resizes iframe for valid cove:resize messages from allowed origins', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const iframe = document.createElement('iframe')
      iframe.setAttribute('data-cove-id', 'cove-2')
      iframe.style.height = '400px'
      document.body.appendChild(iframe)

      window.dispatchEvent(
        new MessageEvent('message', {
          origin: 'https://www.cdc.gov',
          data: { type: 'cove:resize', id: 'cove-2', height: 512 }
        })
      )

      expect(iframe.style.height).toBe('512px')
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })
})
