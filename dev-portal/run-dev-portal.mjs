import { spawn } from 'node:child_process'
import path from 'node:path'

const mode = process.argv[2] === 'compare' ? 'compare' : 'portal'
const rootDir = process.cwd()

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const viteBin = path.resolve(rootDir, 'node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite')

const packageCommands = [
  ['run', 'dev:chart', '--', '--no-open'],
  ['run', 'dev:dashboard', '--', '--no-open'],
  ['run', 'dev:data-bite', '--', '--no-open'],
  ['run', 'dev:data-table', '--', '--no-open'],
  ['run', 'dev:filtered-text', '--', '--no-open'],
  ['run', 'dev:map', '--', '--no-open'],
  ['run', 'dev:markup-include', '--', '--no-open'],
  ['run', 'dev:waffle-chart', '--', '--no-open']
]

const portalArgsByMode = {
  portal: ['--config', 'dev-portal/vite.config.dev-portal.js', '--open'],
  compare: ['--config', 'dev-portal/vite.config.compare.js', '--open', '/compare.html']
}

const children = []
let shuttingDown = false
let forceKillTimer = null

const killChildTree = (child, signal) => {
  if (!child || child.exitCode !== null || child.signalCode) return

  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' })
    return
  }

  try {
    process.kill(-child.pid, signal)
  } catch {
    // Child may already be gone.
  }
}

const shutdown = (signal = 'SIGTERM', exitCode = 0) => {
  if (shuttingDown) return
  shuttingDown = true

  for (const child of children) {
    killChildTree(child, signal)
  }

  if (signal === 'SIGKILL') {
    process.exit(exitCode)
  }

  forceKillTimer = setTimeout(() => {
    for (const child of children) {
      killChildTree(child, 'SIGKILL')
    }
    process.exit(exitCode)
  }, 3000)

  forceKillTimer.unref()
}

const spawnManaged = (command, args) => {
  const child = spawn(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    detached: process.platform !== 'win32'
  })

  children.push(child)

  child.on('exit', (code, signal) => {
    if (shuttingDown) return

    const isSignalExit = signal && signal !== 'SIGTERM' && signal !== 'SIGINT'
    const isFailure = code !== 0 && code !== null

    if (isFailure || isSignalExit) {
      const label = [command, ...args].join(' ')
      console.error(`\n[run-dev-portal] Child exited unexpectedly: ${label}`)
      shutdown('SIGTERM', code ?? 1)
    }
  })

  child.on('error', err => {
    if (shuttingDown) return
    console.error(`\n[run-dev-portal] Failed to start ${command}:`, err)
    shutdown('SIGTERM', 1)
  })

  return child
}

for (const args of packageCommands) {
  spawnManaged(npmCmd, args)
}

spawnManaged(viteBin, portalArgsByMode[mode])

process.on('SIGINT', () => shutdown('SIGTERM', 130))
process.on('SIGTERM', () => shutdown('SIGTERM', 143))
process.on('exit', () => {
  if (forceKillTimer) clearTimeout(forceKillTimer)
})
