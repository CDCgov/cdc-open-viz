import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import os from 'os'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packagesDir = path.join(__dirname, '..', 'packages')

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// Tests if a package can be built in isolation
// See DOCS/PACKAGE_DEPENDENCIES.md for more details
export function testStandaloneBuild(pkgDir) {
  pkgDir = pkgDir.replace('/src', '')
  const pkgName = pkgDir.split('/')[pkgDir.split('/').length - 1]
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `cdc-open-viz-${pkgName}-`))
  copyDirSync(pkgDir, tmpDir)

  let coreTarballPath = null

  try {
    execSync('npm install --include=dev', { cwd: tmpDir })

    // Pack core into tmp directory with unique name then install from package tarball
    const coreDir = path.join(pkgDir, '..', 'core')
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(7)}`
    const uniqueTarballDir = fs.mkdtempSync(path.join(os.tmpdir(), `cdc-pack-${uniqueId}-`))
    const packOutput = execSync(`npm pack --pack-destination="${uniqueTarballDir}"`, {
      cwd: coreDir,
      encoding: 'utf-8'
    })
    const tarballName = packOutput.trim().split('\n').pop()
    coreTarballPath = path.join(uniqueTarballDir, tarballName)
    execSync(`npm install "${coreTarballPath}"`, { cwd: tmpDir, stdio: 'inherit' })

    execSync('npm run build', { cwd: tmpDir })
    return true
  } catch (err) {
    console.error(`❌ Isolated build for ${pkgName} package failed`)
    console.error(err.message)
    return false
  } finally {
    if (coreTarballPath && fs.existsSync(coreTarballPath)) {
      const uniqueTarballDir = path.dirname(coreTarballPath)
      fs.rmSync(uniqueTarballDir, { recursive: true, force: true })
    }
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
}
