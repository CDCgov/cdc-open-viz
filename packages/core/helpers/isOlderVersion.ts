/**
 * Determines if the previous version is older than the current version.
 *
 * This function compares two version strings in the format "major.minor.patch".
 * It returns `true` if the `previousVersion` is older than the `currentVersion`,
 * otherwise it returns `false`.
 *
 * @param previousVersion - The version string to compare against the current version.
 * @param currentVersion - The version string to compare with the previous version.
 * @returns `true` if the previous version is older, otherwise `false`.
 */
export default function isOlderVersion(previousVersion: string, currentVersion: string): boolean {
  if (!previousVersion) return true
  const [prevMajor, prevMinor, prevPatch] = previousVersion.split('.').map(Number)
  const [currMajor, currMinor, currPatch] = currentVersion.split('.').map(Number)
  if (currMajor > prevMajor) return false
  if (currMajor === prevMajor && currMinor > prevMinor) return false
  if (currMajor === prevMajor && currMinor === prevMinor && currPatch > prevPatch) return false
  return true
}
