import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import os from 'node:os'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

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
export async function testStandaloneBuild(pkgDir) {
  // Quick mode bypass: run regular unit tests but skip expensive isolated build checks.
  if (process.env.COVE_QUICK_TESTS === '1') {
    return true
  }

  pkgDir = pkgDir.replace('/src', '')
  const pkgName = pkgDir.split('/')[pkgDir.split('/').length - 1]
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `cdc-open-viz-${pkgName}-`))
  copyDirSync(pkgDir, tmpDir)

  let tarballDir = null

  try {
    await execAsync('npm install --include=dev', { cwd: tmpDir })

    // Pack all local @cdc/* packages and install them to ensure version consistency.
    // This prevents mismatches between npm-published packages and the current local source
    // (e.g. a published @cdc/map referencing a path in @cdc/core that has since changed).
    const packagesDir = path.join(pkgDir, '..')
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(7)}`
    tarballDir = fs.mkdtempSync(path.join(os.tmpdir(), `cdc-pack-${uniqueId}-`))

    const tarballs: string[] = []
    for (const entry of fs.readdirSync(packagesDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      const localPkgDir = path.join(packagesDir, entry.name)
      const pkgJsonPath = path.join(localPkgDir, 'package.json')
      if (!fs.existsSync(pkgJsonPath)) continue
      const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'))
      if (!pkgJson.name?.startsWith('@cdc/')) continue
      const { stdout: packOutput } = await execAsync(`npm pack --pack-destination="${tarballDir}"`, {
        cwd: localPkgDir
      })
      const tarballName = packOutput.trim().split('\n').pop()
      tarballs.push(path.join(tarballDir, tarballName))
    }

    await execAsync(`npm install ${tarballs.map(t => `"${t}"`).join(' ')}`, { cwd: tmpDir })

    await execAsync('npm run build', { cwd: tmpDir })
    return true
  } catch (err) {
    console.error(`❌ Isolated build for ${pkgName} package failed`)
    console.error(err.message)
    return false
  } finally {
    if (tarballDir && fs.existsSync(tarballDir)) {
      fs.rmSync(tarballDir, { recursive: true, force: true })
    }
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
}
