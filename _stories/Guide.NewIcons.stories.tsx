import React from 'react'

export default {
  title: 'Guides/New Icons'
}

export const Documentation = () => <DocumentationContent />

const DocumentationContent = () => (
  <div style={{ padding: '20px', maxWidth: '800px' }}>
    <h1>Adding New Icons</h1>

    <h2>SVG Formatting &amp; Markup</h2>
    <p>New icon SVGs should adhere to the following guidelines:</p>
    <ul>
      <li>
        <strong>Proper Sizing</strong>: Icons should be sized appropriately using vector editing software, with
        extraneous, unnecessary padding removed.
      </li>
      <li>
        <strong>Monotone Design</strong>: Icons should be monotone, with any white sections either removed or
        clipped/masked to transparency.
      </li>
      <li>
        <strong>Pixel Alignment</strong>: Paths should be snapped to 1px increments, with whole number width/height
        dimensions to reduce subpixel malformations.
      </li>
      <li>
        <strong>Clean Markup</strong>: Remove all IDs, classes, inline CSS, unnecessary markup, and any other extraneous
        code completely.
        <p>
          <strong>Markup Example (Bad):</strong>
        </p>
        <pre>
          <code>
            {`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" <style>.cls-1{fill:none;}</style> viewBox="0 0 20.556 20.566">
  ...
</svg>`}
          </code>
        </pre>
        <p>
          <strong>Markup Example (Good):</strong>
        </p>
        <pre>
          <code>{`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">...</svg>`}</code>
        </pre>
      </li>
      <li>
        <strong>Accessibility Attributes</strong>: Include the accessibility-specific attributes{' '}
        <code>aria-hidden="true"</code>, <code>focusable="false"</code>, and <code>role="img"</code> to ensure proper
        508 compliance.
        <pre>
          <code>{`<svg ... aria-hidden="true" focusable="false" role="img"></svg>`}</code>
        </pre>
      </li>
      <li>
        <strong>Fill Attribute</strong>: Use <code>fill="currentColor"</code> to support font color inheritance from the
        parent element.
        <blockquote>
          <strong>Note</strong>: Some icons may require that the <code>&lt;path&gt;</code> receive the <code>fill</code>{' '}
          attribute instead of the top-level <code>&lt;svg&gt;</code>; this depends on whether clipping mask paths exist
          in the image.
        </blockquote>
        <pre>
          <code>{`<svg ... fill="currentColor"></svg>`}</code>
        </pre>
      </li>
      <li>
        <strong>Final SVG Output</strong>: Your final SVG should look like the following:
        <pre>
          <code>
            {`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false" role="img" fill="currentColor">
  ...
</svg>`}
          </code>
        </pre>
      </li>
    </ul>

    <h2>Filename &amp; Directory</h2>
    <p>
      All new icons should be named using the following convention: <code>icon-</code> + <code>kebab-case-name</code> (+
      optional <code>-variation</code>) + <code>.svg</code>.
    </p>
    <p>
      Once all the above steps are completed, place the new icon in the <code>./packages/core/assets</code> directory.
    </p>

    <h2>Adding Icons to the Icon Component</h2>
    <ol>
      <li>
        <strong>Open</strong> the <code>./packages/core/data/iconHash.js</code> file to access the hash list.
      </li>
      <li>
        <strong>Import</strong> your new SVG at the top of the file, maintaining alphabetical order based on the text
        following the <code>icon</code> prefix.
      </li>
      <li>
        <strong>Assign</strong> an import name using the following convention: <code>icon</code> +{' '}
        <code>KebabToPascal</code>.
        <p>
          <strong>Example:</strong> If you've created a file named <code>icon-square-filled.svg</code>, your import name
          should be <code>iconSquareFilled</code>:
        </p>
        <pre>
          <code>{`import iconSquareFilled from '../assets/icon-square-filled.svg';`}</code>
        </pre>
      </li>
      <li>
        <strong>Add</strong> the new icon and its hash to the hash object, maintaining alphabetical order; remove the{' '}
        <code>icon</code> prefix for the key and convert it to camelCase:
        <p>
          <strong>Example:</strong>
        </p>
        <pre>
          <code>
            {`const iconHash = {
  // ...
  squareFilled: iconSquareFilled,
  // ...
};`}
          </code>
        </pre>
      </li>
      <li>
        <strong>Add</strong> your new icon to the Icon component documentation located at{' '}
        <code>./packages/core/components/ui/_stories/Icon.stories.mdx</code> and test to ensure it is functioning
        properly.
      </li>
      <li>
        <strong>You're done!</strong>
      </li>
    </ol>
  </div>
)
