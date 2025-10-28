import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Guides/New Components',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '20px' }}>
          <h1>Adding New Components</h1>
          <p>This guide will walk you through the process of creating a new component.</p>

          <h2>Naming Conventions</h2>
          <ul>
            <li>Because the components are imported directly from COVE related files, there is no need to reference <code>COVE</code> in the component name. For example, <code>CoveButton</code> should just be named <code>Button</code>.</li>
            <li>Components should be named in PascalCase, and should be named after the component itself. For example, a component that renders a button should be named <code>Button</code>, not <code>ButtonComponent</code>.</li>
            <li>Subcomponents should include the name of the parent component, then list its variation, subvariation, etc. The file name should have variation separated by a period in the file name.</li>
          </ul>

          <h3>Example</h3>
          <pre><code>Map.jsx → Map.Marker.jsx → Map.Marker.Icon.jsx</code></pre>
          <pre><code>Map() → MapMarker() → MapMarkerIcon()</code></pre>

          <h2>File Structure</h2>
          <p>All global components should be placed in its related <code>./packages/core/components/***</code> directory.</p>

          <p>The <code>***</code> directory should be representative of the type of component being created:</p>
          <ul>
            <li><strong>editor</strong> - Components/subcomponents specific to the Editor view</li>
            <li><strong>element</strong> - Elements that are consumed for use in COVE</li>
            <li><strong>hoc</strong> - Higher-order components</li>
            <li><strong>input</strong> - Input components for Editor Panels</li>
            <li><strong>loader</strong> - Loading components</li>
            <li><strong>manager</strong> - Data management components</li>
            <li><strong>ui</strong> - Basic UI building blocks</li>
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
      <h1>Adding New Components</h1>
      <p>This guide will walk you through the process of creating a new component.</p>

      <h2>Naming Conventions</h2>
      <ul>
        <li>Because the components are imported directly from COVE related files, there is no need to reference <code>COVE</code> in the component name. For example, <code>CoveButton</code> should just be named <code>Button</code>.</li>
        <li>Components should be named in PascalCase, and should be named after the component itself. For example, a component that renders a button should be named <code>Button</code>, not <code>ButtonComponent</code>.</li>
        <li>Subcomponents should include the name of the parent component, then list its variation, subvariation, etc. The file name should have variation separated by a period in the file name.</li>
      </ul>

      <h3>Example</h3>
      <pre><code>Map.jsx → Map.Marker.jsx → Map.Marker.Icon.jsx</code></pre>
      <pre><code>Map() → MapMarker() → MapMarkerIcon()</code></pre>

      <h2>File Structure</h2>
      <p>All global components should be placed in its related <code>./packages/core/components/***</code> directory.</p>

      <p>The <code>***</code> directory should be representative of the type of component being created:</p>
      <ul>
        <li><strong>editor</strong> - Components/subcomponents specific to the Editor view</li>
        <li><strong>element</strong> - Elements that are consumed for use in COVE</li>
        <li><strong>hoc</strong> - Higher-order components</li>
        <li><strong>input</strong> - Input components for Editor Panels</li>
        <li><strong>loader</strong> - Loading components</li>
        <li><strong>manager</strong> - Data management components</li>
        <li><strong>ui</strong> - Basic UI building blocks</li>
      </ul>
    </div>
  )
}