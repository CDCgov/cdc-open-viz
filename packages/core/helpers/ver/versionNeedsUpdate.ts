import { compareMigrationVersions } from './compareMigrationVersions'

export default function versionNeedsUpdate(previousVersion: string, currentVersion: string): boolean {
  if (!previousVersion) return true
  return compareMigrationVersions(previousVersion, currentVersion) < 0
}

export const isOlderVersion = versionNeedsUpdate
