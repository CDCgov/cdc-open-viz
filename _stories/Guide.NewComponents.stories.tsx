import React from 'react'

export default {
  title: 'Guides/New Components'
}

export const Documentation = () => <DocumentationContent />

const DocumentationContent = () => (
  <div style={{ padding: '20px', maxWidth: '800px' }}>
    <h1>Adding New Components</h1>
    <p>This guide will walk you through the process of creating a new component.</p>

    <h2>Naming Conventions</h2>
    <ul>
      <li>
        Because the components are imported directly from COVE-related files, there is no need to reference{' '}
        <code>COVE</code> in the component name. For example, <code>CoveButton</code> should just be named{' '}
        <code>Button</code>.
      </li>
      <li>
        Components should be named in PascalCase and should be named after the component itself. For example, a
        component that renders a button should be named <code>Button</code>, not <code>ButtonComponent</code>.
      </li>
      <li>
        Subcomponents should include the name of the parent component, then list its variation, subvariation, etc. The
        file name should have variations separated by a period in the file name.
        <br />
        <strong>Example:</strong>
        <pre>
          <code>
            {`Map.jsx -> Map.Marker.jsx -> Map.Marker.Icon.jsx
Map() -> MapMarker() -> MapMarkerIcon()`}
          </code>
        </pre>
      </li>
    </ul>

    <h2>File Structure</h2>
    <p>
      All global components should be placed in their related <code>./packages/core/components/***</code> directory.
    </p>
    <p>
      The <code>***</code> directory should represent the type of component being created:
    </p>
    <ul>
      <li>
        <code>editor</code> - Components/subcomponents specific to the Editor view of a component, where visualization
        settings are set/modified.
      </li>
      <li>
        <code>element</code> - Elements that are consumed for use in COVE and can be recycled but do not necessarily
        function as a direct part of the UI.
      </li>
      <li>
        <code>hoc</code> - Components intended to be used as wrappers around other components. These usually provide
        higher, specific logic or functionality to a component or group of components.
      </li>
      <li>
        <code>input</code> - Components intended to be used as inputs for Editor Panels or, in rare cases, as inputs on
        visualizations.
      </li>
      <li>
        <code>loader</code> - Components intended to be used as loaders for suspense/lazy loading of components.
      </li>
      <li>
        <code>manager</code> - Components specifically intended to be used as tools for managing/interfacing with
        processed data, usually to interactively modify or manipulate data values or structure.
      </li>
      <li>
        <code>ui</code> - Not to be confused with <code>element</code> - UI components are the most basic building
        blocks of an interface. These control the visual appearance of a component and are usually the most reusable
        components in the system.
      </li>
    </ul>

    <h2>Component Structure</h2>
    <p>
      All components should adhere loosely to the following format, using the comments to organize import uses and
      types:
    </p>
    <pre>
      <code>
        {`import React from 'react';

// Third Party
// Store
// Context
// Data
// Constants
// Hooks
// Helpers
// Components - Core
// Components - Local
// Styles

// Visualization
const Component = () => {
  return (
    <div>
      <h1>Component</h1>
    </div>
  );
};
export default Component;`}
      </code>
    </pre>
    <p>
      While directly exporting a non-variable function does work, exporting functions this way allows for a cleaner
      method of attaching memoization or adding extension optimizations to a component. It allows us to reference the
      exported const directly, versus wrapping the entire function itself (which can get lengthy and cluttered with
      other function wrappers):
    </p>
    <pre>
      <code>{`export default memo(Component);`}</code>
    </pre>
  </div>
)
