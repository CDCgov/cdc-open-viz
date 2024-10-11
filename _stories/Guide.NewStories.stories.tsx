import React from 'react'

export default {
  title: 'Guides/New Stories'
}

export const Documentation = () => <DocumentationContent />

const DocumentationContent = () => (
  <div style={{ padding: '20px', maxWidth: '800px' }}>
    <h1>Adding New Stories</h1>
    <p>
      This library is organized following{' '}
      <a href='https://bradfrost.com/blog/post/atomic-web-design/' target='_blank' rel='noopener noreferrer'>
        Atomic Design
      </a>{' '}
      principles.
    </p>
    <p>
      <strong>
        Ensure that the <code>main.ts</code> <code>createEntries</code> function includes the package where the story
        lives
      </strong>
    </p>

    <h2>Overview:</h2>
    <ul>
      <li>
        <strong>Atoms</strong>: Smallest building block
      </li>
      <li>
        <strong>Molecules</strong>: Created from Atoms
      </li>
      <li>
        <strong>Organisms</strong>: Made of Atoms and Molecules while still being a modular building block
      </li>
      <li>
        <strong>Templates</strong>: Can be used to make pages
      </li>
      <li>
        <strong>Pages</strong>: Largest building block which can be isolated from an application
      </li>
    </ul>

    <h2>Should you create a new Story?</h2>
    <ol>
      <li>Is the feature a new UI component which will be public facing?</li>
      <li>Can the feature be categorized as an Atom, Molecule, Organism, Template, or Page?</li>
      <li>Does the feature need to be regression/smoke tested by other developers before PRs?</li>
      <li>Does the story open directly to the state you wish to show without the need for user interaction?</li>
    </ol>
    <p>
      <em>
        If the answer to any of the above is true, consider adding a story. If you are considering building or have
        built a new story and you can't answer yes to any of the above, then the story is probably not needed.
      </em>
    </p>
  </div>
)
