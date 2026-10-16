import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vitest = resolve(repositoryRoot, 'node_modules/.bin/vitest')
const config = resolve(repositoryRoot, 'packages/core/helpers/ver/tests/effective-config/audit/vitest.config.ts')

const result = spawnSync(vitest, ['run', '--config', config], {
  cwd: repositoryRoot,
  encoding: 'utf8',
  stdio: 'inherit'
})

process.exit(result.status ?? 1)
