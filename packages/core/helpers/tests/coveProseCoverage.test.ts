// This test is experimental and can be removed if it's not useful.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from '@babel/parser'
import { describe, expect, it } from 'vitest'

const CURRENT_FILE = fileURLToPath(import.meta.url)
const CURRENT_DIR = path.dirname(CURRENT_FILE)
const REPO_ROOT = path.resolve(CURRENT_DIR, '../../../../')
const PACKAGES_ROOT = path.join(REPO_ROOT, 'packages')
const SOURCE_FILE_RE = /\.(ts|tsx|js|jsx)$/

const EXEMPT_FROM_COVE_PROSE = new Set([
  // Data table parse sites intentionally remain non-prose.
  'packages/core/components/DataTable/components/ChartHeader.tsx',
  'packages/core/components/DataTable/components/ExpandCollapse.tsx',
  'packages/core/components/DataTable/helpers/chartCellMatrix.tsx',
  'packages/core/components/Table/components/Row.tsx',
  // Annotation renderers are intentionally excluded from prose list styling.
  'packages/chart/src/components/Annotations/components/AnnotationList.tsx',
  'packages/chart/src/components/Annotations/components/AnnotationDraggable.tsx',
  'packages/map/src/components/Annotation/AnnotationList.tsx',
  'packages/map/src/components/Annotation/Annotation.Draggable.tsx',
  // Alert modal content is intentionally non-prose.
  'packages/core/components/Alert/components/Alert.tsx'
])

const WALK_SKIP = new Set(['node_modules', 'dist', '.storybook', 'storybook-static'])

const walkFiles = (dirPath: string): string[] => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    if (WALK_SKIP.has(entry.name)) continue

    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath))
      continue
    }

    if (SOURCE_FILE_RE.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

const toRepoRelative = (fullPath: string) => path.relative(REPO_ROOT, fullPath).replaceAll(path.sep, '/')

const getParserPlugins = (filePath: string): Array<'typescript' | 'jsx'> => {
  if (filePath.endsWith('.tsx')) return ['typescript', 'jsx']
  if (filePath.endsWith('.ts')) return ['typescript']
  if (filePath.endsWith('.jsx')) return ['jsx']
  return ['jsx']
}

const expressionContainsCoveProse = (node: any): boolean => {
  if (!node || typeof node !== 'object') return false

  switch (node.type) {
    case 'StringLiteral':
      return node.value.includes('cove-prose')
    case 'TemplateLiteral':
      return node.quasis?.some((q: any) => q.value?.raw?.includes('cove-prose')) ?? false
    case 'ArrayExpression':
      return node.elements?.some((el: any) => expressionContainsCoveProse(el)) ?? false
    case 'JSXExpressionContainer':
      return expressionContainsCoveProse(node.expression)
    case 'BinaryExpression':
      return expressionContainsCoveProse(node.left) || expressionContainsCoveProse(node.right)
    case 'CallExpression':
      return (
        expressionContainsCoveProse(node.callee) ||
        (node.arguments?.some((arg: any) => expressionContainsCoveProse(arg)) ?? false)
      )
    case 'MemberExpression':
      return expressionContainsCoveProse(node.object) || expressionContainsCoveProse(node.property)
    default:
      return false
  }
}

const openingElementHasCoveProse = (openingElement: any): boolean => {
  if (!openingElement?.attributes) return false

  for (const attr of openingElement.attributes) {
    if (!attr || attr.type !== 'JSXAttribute') continue
    if (attr.name?.name !== 'className') continue

    const value = attr.value
    if (!value) continue
    if (value.type === 'StringLiteral' && value.value.includes('cove-prose')) return true
    if (value.type === 'JSXExpressionContainer' && expressionContainsCoveProse(value.expression)) return true
  }

  return false
}

const getNodeLine = (node: any): number => node?.loc?.start?.line ?? 0

const checkFileForCoverageViolations = (filePath: string, content: string): number[] => {
  const parserPlugins = getParserPlugins(filePath)
  const ast = parse(content, {
    sourceType: 'module',
    plugins: parserPlugins,
    errorRecovery: true
  })

  const parseImportNames = new Set<string>()
  const parentMap = new WeakMap<object, any>()
  const violations = new Set<number>()

  const setParent = (child: any, parent: any) => {
    if (child && typeof child === 'object') {
      parentMap.set(child, parent)
    }
  }

  const hasJsxAncestor = (node: any): boolean => {
    let current = parentMap.get(node)
    while (current) {
      if (current.type === 'JSXElement') return true
      current = parentMap.get(current)
    }
    return false
  }

  const hasCoveProseInAncestors = (node: any): boolean => {
    let current = node
    while (current) {
      if (current.type === 'JSXElement' && openingElementHasCoveProse(current.openingElement)) return true
      current = parentMap.get(current)
    }
    return false
  }

  const walk = (node: any, parent: any = null) => {
    if (!node || typeof node !== 'object') return
    setParent(node, parent)

    if (node.type === 'ImportDeclaration' && node.source?.value === 'html-react-parser') {
      for (const specifier of node.specifiers || []) {
        if (specifier.type === 'ImportDefaultSpecifier' || specifier.type === 'ImportSpecifier') {
          parseImportNames.add(specifier.local.name)
        }
      }
    }

    if (
      node.type === 'CallExpression' &&
      node.callee?.type === 'Identifier' &&
      parseImportNames.has(node.callee.name)
    ) {
      if (hasJsxAncestor(node) && !hasCoveProseInAncestors(node)) {
        violations.add(getNodeLine(node))
      }
    }

    if (node.type === 'JSXAttribute' && node.name?.name === 'dangerouslySetInnerHTML') {
      if (!hasCoveProseInAncestors(node)) {
        violations.add(getNodeLine(node))
      }
    }

    for (const value of Object.values(node)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          walk(item, node)
        }
      } else if (value && typeof value === 'object' && 'type' in value) {
        walk(value, node)
      }
    }
  }

  walk(ast)

  return Array.from(violations).sort((a, b) => a - b)
}

describe('cove-prose contract coverage', () => {
  it('requires .cove-prose near parse() and dangerouslySetInnerHTML render sites', () => {
    const sourceFiles = walkFiles(PACKAGES_ROOT)
    const failingSites: string[] = []

    for (const filePath of sourceFiles) {
      const relPath = toRepoRelative(filePath)
      // Editor files contain internal UI logic and are not user-authored prose.
      if (EXEMPT_FROM_COVE_PROSE.has(relPath) || /editor/i.test(relPath)) continue

      const content = fs.readFileSync(filePath, 'utf-8')
      const violatingLines = checkFileForCoverageViolations(filePath, content)
      for (const line of violatingLines) {
        failingSites.push(`${relPath}:${line}`)
      }
    }

    expect(
      failingSites,
      `Add ".cove-prose" near these rich-text render sites or explicitly exempt with justification:\n${failingSites.join(
        '\n'
      )}`
    ).toEqual([])
  })
})
