export default function versionNeedsUpdate(previousVersion: string, currentVersion: string): boolean {
  if (!previousVersion) return true
  const [prevMajor, prevMinor, prevPatch] = previousVersion.split('.').map(Number)
  const [currMajor, currMinor, currPatch] = currentVersion.split('.').map(Number)
  if (currMajor > prevMajor) return true
  if (currMajor === prevMajor && currMinor > prevMinor) return true
  if (currMajor === prevMajor && currMinor === prevMinor && currPatch > prevPatch) return true
  return false
}
