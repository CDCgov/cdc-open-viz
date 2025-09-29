import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Guides/New Icons',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '20px' }}>
          <h1>Adding New Icons</h1>
          <p>This guide will walk you through the process of adding new icons to the system.</p>

          <h2>Icon Guidelines</h2>
          <ul>
            <li>Icons should be in SVG format for scalability and performance</li>
            <li>Use consistent sizing and visual weight across all icons</li>
            <li>Icons should be placed in the <code>packages/core/assets/</code> directory</li>
            <li>Follow the existing naming convention: <code>icon-[name].svg</code></li>
          </ul>

          <h2>Import and Usage</h2>
          <p>Icons can be imported and used as React components:</p>
          <pre><code>{`import WarningIcon from '@cdc/core/assets/icon-warning-circle.svg'

// Usage
<WarningIcon width="24" height="24" className="warning-icon" />`}</code></pre>

          <h2>Icon Optimization</h2>
          <ul>
            <li>Remove unnecessary metadata and comments from SVG files</li>
            <li>Use viewBox for responsive scaling</li>
            <li>Ensure consistent stroke width and fill properties</li>
            <li>Test icons at different sizes to ensure clarity</li>
          </ul>

          <h2>Accessibility</h2>
          <ul>
            <li>Always provide meaningful alt text or aria-labels</li>
            <li>Use appropriate ARIA attributes for decorative vs informational icons</li>
            <li>Ensure sufficient color contrast for icon visibility</li>
          </ul>
        </div>
      )
    }
  }
}

export default meta

export const Guide = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h1>Adding New Icons</h1>
      <p>This guide will walk you through the process of adding new icons to the system.</p>

      <h2>Icon Guidelines</h2>
      <ul>
        <li>Icons should be in SVG format for scalability and performance</li>
        <li>Use consistent sizing and visual weight across all icons</li>
        <li>Icons should be placed in the <code>packages/core/assets/</code> directory</li>
        <li>Follow the existing naming convention: <code>icon-[name].svg</code></li>
      </ul>

      <h2>Import and Usage</h2>
      <p>Icons can be imported and used as React components:</p>
      <pre><code>{`import WarningIcon from '@cdc/core/assets/icon-warning-circle.svg'

// Usage
<WarningIcon width="24" height="24" className="warning-icon" />`}</code></pre>

      <h2>Icon Optimization</h2>
      <ul>
        <li>Remove unnecessary metadata and comments from SVG files</li>
        <li>Use viewBox for responsive scaling</li>
        <li>Ensure consistent stroke width and fill properties</li>
        <li>Test icons at different sizes to ensure clarity</li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>Always provide meaningful alt text or aria-labels</li>
        <li>Use appropriate ARIA attributes for decorative vs informational icons</li>
        <li>Ensure sufficient color contrast for icon visibility</li>
      </ul>
    </div>
  )
}