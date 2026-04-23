type ParsedMigrationVersion = {
  major: number
  minor: number
  patch: number
  suffix: number
}

const parseMigrationVersion = (version: string): ParsedMigrationVersion => {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-(\d+))?$/)

  if (!match) {
    throw new Error(
      `Invalid migration version "${version}". Expected format "major.minor.patch" or "major.minor.patch-suffix".`
    )
  }

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

