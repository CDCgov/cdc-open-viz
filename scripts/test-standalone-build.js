const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const os = require('os')

//const packages = ['chart', 'core', 'map', 'data-bite', 'data-table', 'filtered-text', 'waffle-chart', 'markup-include']
const packages = ['waffle-chart']
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

function testBuild(pkg) {
  const srcDir = path.join(packagesDir, pkg)
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `cdc-open-viz-${pkg}-`))
  copyDirSync(srcDir, tmpDir)

  try {
    execSync('npm install', { cwd: tmpDir, stdio: 'inherit' })
    execSync('npm link @cdc/core', { cwd: tmpDir, stdio: 'inherit' })
    execSync('npm run build', { cwd: tmpDir, stdio: 'inherit' })
    console.log(`✅ ${pkg} built successfully`)
  } catch (err) {
    console.error(`❌ ${pkg} build failed`)
    process.exitCode = 1
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  }
}

for (const pkg of packages) {
  testBuild(pkg)
}
