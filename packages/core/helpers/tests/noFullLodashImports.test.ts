import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const packagesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..', 'packages')
const sourceExtensions = new Set(['.js', '.jsx', '.ts', '.tsx'])
const excludedDirectories = new Set(['node_modules', '_stories', 'tests', '__tests__', 'examples'])
const fullLodashPaths = new Set(['lodash', 'lodash/lodash', 'lodash/lodash.js'])

const getSourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (excludedDirectories.has(entry.name) || entry.name === 'dist' || entry.name.startsWith('dist-')) return []
      return getSourceFiles(filePath)
    }
    if (!entry.isFile() || !sourceExtensions.has(path.extname(entry.name))) return []
    if (/\.(test|spec|stories)\.[jt]sx?$/.test(entry.name)) return []
    return [filePath]
  })

const getImportPath = (node: ts.Node): ts.StringLiteral | undefined => {
  if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) {
    return ts.isStringLiteral(node.moduleSpecifier) ? node.moduleSpecifier : undefined
  }
  if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference)) {
    const expression = node.moduleReference.expression
    return expression && ts.isStringLiteral(expression) ? expression : undefined
  }
  if (ts.isCallExpression(node) && node.arguments.length === 1) {
    const isModuleLoad =
      node.expression.kind === ts.SyntaxKind.ImportKeyword ||
      (ts.isIdentifier(node.expression) && node.expression.text === 'require')
    return isModuleLoad && ts.isStringLiteral(node.arguments[0]) ? node.arguments[0] : undefined
  }
}

describe('production Lodash imports', () => {
  it('uses function paths rather than the full CommonJS package', () => {
    const violations: string[] = []

    for (const filePath of getSourceFiles(packagesDir)) {
      const source = ts.createSourceFile(filePath, readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true)
      const visit = (node: ts.Node) => {
        const modulePath = getImportPath(node)
        if (modulePath && fullLodashPaths.has(modulePath.text)) {
          const line = source.getLineAndCharacterOfPosition(modulePath.getStart(source)).line + 1
          violations.push(`${path.relative(packagesDir, filePath)}:${line}: ${modulePath.text}`)
        }
        ts.forEachChild(node, visit)
      }
      visit(source)
    }

    expect(violations).toEqual([])
  })
})
