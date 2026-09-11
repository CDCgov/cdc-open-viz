import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const repoRoot = path.resolve(__dirname, '../../../..')
const packageName = '@cdc/filtered-text'

const readSource = (relativePath: string) => fs.readFileSync(path.join(repoRoot, relativePath), 'utf8')

const getFiles = (dir: string): string[] => {
  if (!fs.existsSync(dir)) return []

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['dist', 'node_modules'].includes(entry.name)) return []

    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return getFiles(entryPath)
    return [entryPath]
  })
}

describe('filtered-text package cleanup', () => {
  it('does not keep filtered-text as an installable workspace package', () => {
    expect(fs.existsSync(path.join(repoRoot, 'packages/filtered-text/package.json'))).toBe(false)
  })

  it('does not depend on the retired filtered-text package', () => {
    const packageJsonPaths = [
      path.join(repoRoot, 'package.json'),
      ...fs
        .readdirSync(path.join(repoRoot, 'packages'), { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => path.join(repoRoot, 'packages', entry.name, 'package.json'))
        .filter(fs.existsSync)
    ]

    const dependencySections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies', 'resolutions']
    const offenders = packageJsonPaths
      .filter(packageJsonPath => {
        const manifest = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
        return dependencySections.some(section => manifest[section]?.[packageName])
      })
      .map(packageJsonPath => path.relative(repoRoot, packageJsonPath))

    expect(offenders).toEqual([])
  })

  it('does not keep a filtered-text lockfile entry', () => {
    expect(readSource('yarn.lock')).not.toContain(`${packageName}@`)
  })

  it('does not import the retired filtered-text package from source', () => {
    const importPattern = /(?:from\s+|import\s+)['"]@cdc\/filtered-text(?:\/[^'"]*)?['"]/
    const offenders = getFiles(path.join(repoRoot, 'packages'))
      .filter(filePath => /\.(js|jsx|ts|tsx)$/.test(filePath))
      .filter(filePath => importPattern.test(fs.readFileSync(filePath, 'utf8')))
      .map(filePath => path.relative(repoRoot, filePath))

    expect(offenders).toEqual([])
  })
})
