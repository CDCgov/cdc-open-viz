import { compareMigrationVersions } from './ver/compareMigrationVersions'

/**
 * Determines if the previous version is older than the current version.
 *
 * This function compares config migration version strings in the format
 * "major.minor.patch" or "major.minor.patch-numeric-suffix".
 * It returns `true` if the `previousVersion` is older than the `currentVersion`,
 * otherwise it returns `false`.
 *
 * @param previousVersion - The version string to compare against the current version.
 * @param currentVersion - The version string to compare with the previous version.
 * @returns `true` if the previous version is older, otherwise `false`.
 */
export default function isOlderVersion(previousVersion: string, currentVersion: string): boolean {
  if (!previousVersion) return true
  return compareMigrationVersions(previousVersion, currentVersion) < 0
}
