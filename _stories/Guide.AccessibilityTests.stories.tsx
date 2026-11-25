import type { Meta, StoryObj } from '@storybook/react-vite'

const globalConfiguration = `// .storybook/preview.jsx
export const parameters = {
  a11y: {
    test: 'error',
    options: {
      runOnly: {
        type: 'rule',
        values: ['aria-command-name']
      }
    }
  }
}`

const AccessibilityTestGuide = () => (
  <main style={{ maxWidth: '48rem', padding: '2rem' }}>
    <h1>Automated accessibility tests</h1>
    <p>
      Storybook runs axe's aria-command-name rule for every story. Missing accessible names on custom elements with
      explicit button, link, or menuitem roles fail tests locally and in pull requests.
    </p>

    <section aria-labelledby='accessible-example-heading'>
      <h2 id='accessible-example-heading'>Accessible example</h2>
      <p>This semantic content is scanned by the accessibility addon when the story test runs.</p>
      <button type='button'>Example action</button>
    </section>

    <section aria-labelledby='template-heading'>
      <h2 id='template-heading'>Project configuration</h2>
      <p>
        Configure the ticket-specific rule once in Storybook preview parameters; individual stories need no
        accessibility setup. The runOnly option intentionally limits this automated gate to aria-command-name.
      </p>
      <pre>
        <code>{globalConfiguration}</code>
      </pre>
    </section>
  </main>
)

const meta = {
  title: 'Guides/Accessibility Tests',
  component: AccessibilityTestGuide
} satisfies Meta<typeof AccessibilityTestGuide>

export default meta

type Story = StoryObj<typeof meta>

export const Guide: Story = {}
