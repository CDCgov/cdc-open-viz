/**
 * Helpers for preparing screenshot containers for image downloads
 */

export interface ClonedElements {
  clonedTree: HTMLElement
  clonedViz: HTMLElement
}

interface VisualizationWrapper {
  parentChildren: Element[]
  wrapperIndex: number
}

/**
 * Walk up from viz to find a parent container that has:
 * - Multiple children
 * - At least one child (before viz) that contains H2/H3 but NOT the viz
 *
 * Stops climbing at section boundaries (never goes above <section> or .dfe-section)
 */
function findParentWithContext(viz: HTMLElement): HTMLElement | null {
  let current = viz.parentElement

  while (current) {
    const isSection = current.tagName === 'SECTION' || current.classList.contains('dfe-section')

    const children = Array.from(current.children)

    // Need at least 2 children (heading + viz wrapper)
    if (children.length < 2) {
      if (isSection) {
        return null
      }
      current = current.parentElement
      continue
    }

    // Find which child contains the viz (guaranteed to exist since we're walking up from viz)
    const vizChildIndex = children.findIndex(child => child.contains(viz))

    // Check children before the viz for heading
    for (let i = 0; i < vizChildIndex; i++) {
      const child = children[i] as HTMLElement
      const isHeading = child.tagName === 'H2' || child.tagName === 'H3'
      const containsHeading = child.querySelector('h2, h3') !== null

      if (isHeading || containsHeading) {
        return current
      }
    }

    // Don't climb above section boundaries
    if (isSection) {
      return null
    }

    // No suitable heading found in this parent's children, go up
    current = current.parentElement
  }

  return null
}

/**
 * Find which direct child of the parent container contains the visualization
 */
function findVisualizationWrapper(viz: HTMLElement, parent: Element): VisualizationWrapper {
  const parentChildren = Array.from(parent.children)
  const wrapperIndex = parentChildren.findIndex(child => child.contains(viz))
  return { parentChildren, wrapperIndex }
}

/**
 * Walk backwards from viz to find nearest H2 or H3
 * Stops early if another visualization is encountered
 */
function findNearestHeadingIndex(parentChildren: Element[], vizWrapperIndex: number): number {
  for (let i = vizWrapperIndex - 1; i >= 0; i--) {
    const child = parentChildren[i] as HTMLElement

    // STOP: Another visualization found - don't include its content
    if (child.classList.contains('cove-visualization') || child.querySelector('.cove-visualization')) {
      return -1
    }

    // Found direct H2/H3
    if (child.tagName === 'H2' || child.tagName === 'H3') {
      return i
    }

    // Found nested H2/H3
    if (child.querySelector('h2, h3')) {
      return i
    }
  }

  return -1 // No heading found
}

/**
 * Build cloned parent container with only selected children (heading through viz)
 */
function buildContextClone(
  parent: Element,
  headingIndex: number,
  vizWrapperIndex: number,
  elementToCapture: string
): ClonedElements {
  const parentChildren = Array.from(parent.children)

  // Shallow clone parent (preserves classes/styling)
  const clonedTree = parent.cloneNode(false) as HTMLElement

  // Append only selected children (heading → viz wrapper)
  for (let i = headingIndex; i <= vizWrapperIndex; i++) {
    clonedTree.appendChild(parentChildren[i].cloneNode(true))
  }

  // Find viz in cloned tree
  const clonedViz = clonedTree.querySelector(`[data-download-id="${elementToCapture}"]`) as HTMLElement

  // Container styling adjustments
  clonedTree.style.marginBottom = '0'

  // Remove top margin from context headings (not inside viz)
  const allHeadings = clonedTree.querySelectorAll('h2, h3')
  allHeadings.forEach(heading => {
    if (!clonedViz.contains(heading)) {
      ;(heading as HTMLElement).style.marginTop = '0'
    }
  })

  return { clonedTree, clonedViz }
}

function isInEditorMode(element: HTMLElement): boolean {
  return element.closest('.cove-visualization.isEditor') !== null
}

/**
 * Prepare cloned elements (with or without context)
 * Returns viz-only clone as fallback for any failure
 * Exported for testing
 */
export function prepareClonedElements(
  baseSvg: HTMLElement,
  includeContextInDownload: boolean,
  elementToCapture: string
): ClonedElements {
  const defaultClone = (): ClonedElements => {
    const tree = baseSvg.cloneNode(true) as HTMLElement
    return { clonedTree: tree, clonedViz: tree }
  }

  // Early return: context not requested or in editor mode (editor downloads should not include context)
  if (!includeContextInDownload || isInEditorMode(baseSvg)) {
    return defaultClone()
  }

  // Early return: no parent with context found
  const parent = findParentWithContext(baseSvg)
  if (!parent) {
    return defaultClone()
  }

  // Get viz wrapper (guaranteed to exist since findParentWithContext found it)
  const { parentChildren, wrapperIndex } = findVisualizationWrapper(baseSvg, parent as Element)

  // Early return: no heading found (or another viz in the way)
  const headingIndex = findNearestHeadingIndex(parentChildren, wrapperIndex)
  if (headingIndex < 0) {
    return defaultClone()
  }

  // Build with context
  return buildContextClone(parent, headingIndex, wrapperIndex, elementToCapture)
}

/**
 * Strip all <a> tags from cloned tree (links aren't clickable in PNG)
 */
function stripLinks(clonedTree: HTMLElement): void {
  const allLinks = clonedTree.querySelectorAll('a')
  allLinks.forEach(link => {
    const textNode = document.createTextNode(link.textContent || '')
    link.parentNode?.replaceChild(textNode, link)
  })
}

/**
 * Convert canvas elements to images (canvas pixel data doesn't clone)
 */
function convertCanvasToImages(baseSvg: HTMLElement, clonedViz: HTMLElement): void {
  const originalCanvases = baseSvg.querySelectorAll('canvas')
  const clonedCanvases = clonedViz.querySelectorAll('canvas')

  clonedCanvases.forEach((clonedCanvas, index) => {
    const originalCanvas = originalCanvases[index] as HTMLCanvasElement
    if (originalCanvas && originalCanvas.width > 0 && originalCanvas.height > 0) {
      const img = document.createElement('img')
      img.src = originalCanvas.toDataURL('image/png')
      img.width = originalCanvas.width
      img.height = originalCanvas.height
      img.className = originalCanvas.className
      clonedCanvas.parentNode?.replaceChild(img, clonedCanvas)
    }
  })
}

/**
 * Remove width classes that interfere with screenshot sizing
 */
function removeWidthClasses(clonedTree: HTMLElement): void {
  const classesToRemove = ['dfe-block--width-wide', 'dfe-block--width-full_width']

  classesToRemove.forEach(className => {
    const elements = clonedTree.querySelectorAll(`.${className}`)
    elements.forEach(el => el.classList.remove(className))
  })

  // Also check the root element itself
  classesToRemove.forEach(className => {
    clonedTree.classList.remove(className)
  })
}

/**
 * Expand SVG widths and remove animation classes
 */
function expandSvgWidths(clonedViz: HTMLElement): void {
  const svgWidthBuffer = 25
  const svgElements = clonedViz.querySelectorAll('svg')

  svgElements.forEach(svg => {
    const currentWidth = parseInt(svg.getAttribute('width') || '0')
    if (currentWidth > 0) {
      svg.setAttribute('width', (currentWidth + svgWidthBuffer).toString())
    }

    // Remove animation classes to show final state immediately
    svg.classList.remove('animated', 'animate')
  })
}

/**
 * Main function: Prepare a complete container ready for html2canvas screenshot
 */
export function prepareScreenshotContainer(
  baseSvg: HTMLElement,
  includeContextInDownload: boolean,
  elementToCapture: string
): HTMLDivElement {
  // 1. Clone elements (with or without context)
  const { clonedTree, clonedViz } = prepareClonedElements(baseSvg, includeContextInDownload, elementToCapture)

  // 2. Remove width classes that interfere with screenshot sizing
  removeWidthClasses(clonedTree)

  // 3. Strip all links (not clickable in static image)
  stripLinks(clonedTree)

  // 4. Convert canvas elements to images
  convertCanvasToImages(baseSvg, clonedViz)

  // 5. Expand SVG widths to prevent clipping
  expandSvgWidths(clonedViz)

  // 6. Calculate viz dimensions
  const computedStyle = getComputedStyle(baseSvg)
  const vizWidth =
    parseFloat(computedStyle.width) -
    (parseFloat(computedStyle.paddingLeft) || 0) -
    (parseFloat(computedStyle.paddingRight) || 0)

  // 7. Create and style container
  const container = document.createElement('div')
  container.style.width = `${vizWidth + 36}px`
  container.style.padding = '18px'

  // 8. Reset viz padding
  clonedViz.style.padding = '0'

  // 9. Append cloned tree to container
  container.appendChild(clonedTree)

  return container
}
