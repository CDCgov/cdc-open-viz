type ParsedMigrationVersion = {
  major: number
  minor: number
  patch: number
  suffix: number
}

const parseMigrationVersion = (version: string): ParsedMigrationVersion => {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-(\d+))?$/)

  // Legacy configs in the wild may carry malformed version strings. Treat them
  // as the oldest known version so the full migration chain still runs.
  if (!match) return { major: 0, minor: 0, patch: 0, suffix: 0 }

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    suffix: Number(match[4] ?? 0)
  }
}

export const compareMigrationVersions = (leftVersion: string, rightVersion: string): number => {
  const left = parseMigrationVersion(leftVersion)
  const right = parseMigrationVersion(rightVersion)

  if (left.major !== right.major) return left.major - right.major
  if (left.minor !== right.minor) return left.minor - right.minor
  if (left.patch !== right.patch) return left.patch - right.patch
  return left.suffix - right.suffix
}
