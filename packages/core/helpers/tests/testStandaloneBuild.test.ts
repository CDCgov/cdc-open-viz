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

export function testStandaloneBuild(pkgDir) {
  // This test can't be turned on until we've published the new version of @cdc/core
  return true

  pkgDir = pkgDir.replace('/src', '')
  const pkgName = pkgDir.split('/')[pkgDir.split('/').length - 1]
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `cdc-open-viz-${pkgName}-`))
  copyDirSync(pkgDir, tmpDir)

  try {
    execSync('npm install', { cwd: tmpDir })
    execSync('npm link @cdc/core', { cwd: tmpDir })
    execSync('npm run build', { cwd: tmpDir })
    return true
  } catch (err) {
    console.error(`❌ Isolated build for ${pkgName} package failed`)
    return false
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
}
