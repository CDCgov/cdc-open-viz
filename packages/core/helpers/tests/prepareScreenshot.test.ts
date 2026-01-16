import { describe, it, expect, afterEach } from 'vitest'
import { prepareClonedElements } from '../prepareScreenshot'

describe('prepareClonedElements', () => {
  // Helper to create DOM structure and append to document
  function createDOM(htmlString: string): HTMLElement {
    const container = document.createElement('div')
    container.innerHTML = htmlString
    document.body.appendChild(container)
    return container
  }

  // Clean up after each test
  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('includeContextInDownload = false', () => {
    it('should return viz-only clone when context not requested', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Title</h2>
          <p>Text</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Viz Content</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, false, 'viz1')

      // When context not requested, clonedTree should be same as clonedViz (just the viz)
      expect(result.clonedTree).toBe(result.clonedViz)
      expect(result.clonedTree.querySelector('h2')).toBeNull()
      expect(result.clonedTree.querySelector('p')).toBeNull()
    })

    it('should return viz-only even with perfect context available when not requested', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Perfect Title</h2>
          <p>Perfect description</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, false, 'viz1')

      // Even though context is available, should not include it
      expect(result.clonedTree).toBe(result.clonedViz)
      expect(result.clonedTree.querySelector('h2')).toBeNull()
      expect(result.clonedTree.querySelector('p')).toBeNull()
    })
  })

  describe('Basic heading + viz patterns', () => {
    it('should include H2 and paragraph when before viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Emergency Department Visits</h2>
          <p>Weekly percent of total visits.</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')
      const children = Array.from(result.clonedTree.children)

      expect(children.length).toBe(3)
      expect(children[0].tagName).toBe('H2')
      expect(children[1].tagName).toBe('P')
      expect(result.clonedTree.contains(result.clonedViz)).toBe(true)
    })

    it('should include H3 and paragraph when before viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h3>Emergency Department Visits by Age</h3>
          <p>Weekly percent of total visits.</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')
      const children = Array.from(result.clonedTree.children)

      expect(children.length).toBe(3)
      expect(children[0].tagName).toBe('H3')
      expect(children[1].tagName).toBe('P')
      expect(result.clonedTree.contains(result.clonedViz)).toBe(true)
    })

    it('should prefer H3 over H2 when both present', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>By Age</h2>
          <h3>Emergency Department Visits by Age</h3>
          <p>Weekly percent of total visits.</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should include H3 (nearest to viz) but NOT H2
      expect(result.clonedTree.querySelector('h2')).toBeNull()
      expect(result.clonedTree.querySelector('h3')).not.toBeNull()
      expect(result.clonedTree.querySelector('h3')?.textContent).toBe('Emergency Department Visits by Age')
    })

    it('should include all paragraphs between heading and viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h3>Emergency Department Visits</h3>
          <p>First paragraph.</p>
          <p>Second paragraph.</p>
          <p>Third paragraph.</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')
      const paragraphs = result.clonedTree.querySelectorAll('p')

      expect(paragraphs.length).toBe(3)
      expect(paragraphs[0].textContent).toBe('First paragraph.')
      expect(paragraphs[1].textContent).toBe('Second paragraph.')
      expect(paragraphs[2].textContent).toBe('Third paragraph.')
    })
  })

  describe('Multiple visualizations', () => {
    it('should return viz-only when viz2 follows viz1 with no heading between', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Title</h2>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart 1</div>
          <div class="cdc-open-viz-module" data-download-id="viz2">Chart 2</div>
        </div>
      `)
      const viz2 = container.querySelector('[data-download-id="viz2"]') as HTMLElement

      const result = prepareClonedElements(viz2, true, 'viz2')

      // findNearestHeadingIndex stops at viz1 (returns -1), so we get viz-only
      expect(result.clonedTree).toBe(result.clonedViz)
    })

    it('should not include heading from previous viz when taking screenshot of second viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>First Chart</h2>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart 1</div>
          <h2>Second Chart</h2>
          <div class="cdc-open-viz-module" data-download-id="viz2">Chart 2</div>
        </div>
      `)
      const viz2 = container.querySelector('[data-download-id="viz2"]') as HTMLElement

      const result = prepareClonedElements(viz2, true, 'viz2')

      // Should include "Second Chart" but NOT "First Chart"
      const headings = result.clonedTree.querySelectorAll('h2')
      expect(headings.length).toBe(1)
      expect(headings[0].textContent).toBe('Second Chart')
    })

    it('should ignore heading inside another viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <div class="cdc-open-viz-module" data-download-id="viz1">
            <h2>Title Inside Viz1</h2>
            <div>Chart 1</div>
          </div>
          <div class="cdc-open-viz-module" data-download-id="viz2">Chart 2</div>
        </div>
      `)
      const viz2 = container.querySelector('[data-download-id="viz2"]') as HTMLElement

      const result = prepareClonedElements(viz2, true, 'viz2')

      // findNearestHeadingIndex stops at viz1 (returns -1), so we get viz-only
      expect(result.clonedTree).toBe(result.clonedViz)
    })

    it('should return viz-only when viz3 follows viz1 and viz2', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Title</h2>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart 1</div>
          <div class="cdc-open-viz-module" data-download-id="viz2">Chart 2</div>
          <div class="cdc-open-viz-module" data-download-id="viz3">Chart 3</div>
        </div>
      `)
      const viz3 = container.querySelector('[data-download-id="viz3"]') as HTMLElement

      const result = prepareClonedElements(viz3, true, 'viz3')

      // Should stop at viz2, return viz-only
      expect(result.clonedTree).toBe(result.clonedViz)
    })

    it('should prefer H3 over H2 between two vizs', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart 1</div>
          <h2>Section</h2>
          <h3>Subsection</h3>
          <p>Description</p>
          <div class="cdc-open-viz-module" data-download-id="viz2">Chart 2</div>
        </div>
      `)
      const viz2 = container.querySelector('[data-download-id="viz2"]') as HTMLElement

      const result = prepareClonedElements(viz2, true, 'viz2')

      // Should include H3 (nearest) but not H2
      expect(result.clonedTree.querySelector('h2')).toBeNull()
      expect(result.clonedTree.querySelector('h3')?.textContent).toBe('Subsection')
    })
  })

  describe('Section boundaries', () => {
    it('should stop at dfe-section boundary', () => {
      const container = createDOM(`
        <div class="cdc-dfe-body__center">
          <div class="dfe-section">
            <h2>Previous Section</h2>
            <p>Previous content</p>
            <div class="cdc-open-viz-module" data-download-id="viz0">Other viz</div>
          </div>
          <div class="dfe-section">
            <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
          </div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should return viz-only (stopped at section boundary, no heading in same section)
      expect(result.clonedTree).toBe(result.clonedViz)
      expect(result.clonedTree.querySelector('h2')).toBeNull()
      expect(result.clonedTree.textContent).not.toContain('Previous Section')
    })

    it('should work without dfe-section wrapper', () => {
      const container = createDOM(`
        <div class="some-container">
          <h2>Title</h2>
          <p>Description</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')
      const children = Array.from(result.clonedTree.children)

      // Should include H2 and P even without dfe-section
      expect(children.length).toBe(3)
      expect(result.clonedTree.querySelector('h2')?.textContent).toBe('Title')
      expect(result.clonedTree.querySelector('p')?.textContent).toBe('Description')
    })

    it('should stop at <section> tag boundary', () => {
      const container = createDOM(`
        <div class="outer-container">
          <h2>Title Above Section</h2>
          <section>
            <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
          </section>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // findParentWithContext stops at <section> boundary (returns null), so viz-only
      expect(result.clonedTree).toBe(result.clonedViz)
    })

    it('should stop at innermost section boundary when nested', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Outer Title</h2>
          <section>
            <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
          </section>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should stop at <section>, not climb to dfe-section
      expect(result.clonedTree).toBe(result.clonedViz)
      expect(result.clonedTree.textContent).not.toContain('Outer Title')
    })

    it('should include context when section tag is the parent with heading', () => {
      const container = createDOM(`
        <section>
          <h2>Section Title</h2>
          <p>Description</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </section>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Section with heading inside should work
      expect(result.clonedTree.querySelector('h2')?.textContent).toBe('Section Title')
      expect(result.clonedTree.querySelector('p')?.textContent).toBe('Description')
    })
  })

  describe('Edge cases', () => {
    it('should return viz-only when only paragraph (no heading) before viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <p>Some paragraph without heading</p>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should return viz-only (no heading found)
      expect(result.clonedTree).toBe(result.clonedViz)
      expect(result.clonedTree.querySelector('p')).toBeNull()
    })

    it('should not include content after viz', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Title</h2>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
          <p>Content after viz should not be included</p>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should include H2 and viz, but NOT the paragraph after
      expect(result.clonedTree.querySelector('h2')).not.toBeNull()
      expect(result.clonedTree.textContent).not.toContain('Content after viz should not be included')
    })

    it('should handle direct H2 element as child', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Direct H2 Child</h2>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should find H2 even though it's a direct child (not nested in div)
      expect(result.clonedTree.querySelector('h2')?.textContent).toBe('Direct H2 Child')
    })

    it('should handle H2 nested in div', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <div class="heading-wrapper">
            <h2>Nested H2</h2>
          </div>
          <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should find H2 even when nested
      expect(result.clonedTree.querySelector('h2')?.textContent).toBe('Nested H2')
      expect(result.clonedTree.querySelector('.heading-wrapper')).not.toBeNull()
    })

    it('should handle nested visualization wrapper', () => {
      const container = createDOM(`
        <div class="dfe-section">
          <h2>Title</h2>
          <p>Description</p>
          <div class="outer-wrapper">
            <div class="inner-wrapper">
              <div class="cdc-open-viz-module" data-download-id="viz1">Chart</div>
            </div>
          </div>
        </div>
      `)
      const viz = container.querySelector('[data-download-id="viz1"]') as HTMLElement

      const result = prepareClonedElements(viz, true, 'viz1')

      // Should include H2, P, and nested wrappers with viz
      expect(result.clonedTree.querySelector('h2')).not.toBeNull()
      expect(result.clonedTree.querySelector('p')).not.toBeNull()
      expect(result.clonedTree.querySelector('.outer-wrapper')).not.toBeNull()
      expect(result.clonedTree.querySelector('.inner-wrapper')).not.toBeNull()
      expect(result.clonedViz.textContent).toBe('Chart')
    })
  })
})
